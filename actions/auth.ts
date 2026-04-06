"use server";

import { oauthClient } from "@/actions/setup/google";
import { cookies } from "next/headers";
import { checkAdmin } from "./db";
import jwt from "jsonwebtoken";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { UserRefreshClient } from "google-auth-library";
import { UserSession } from "@/lib/types";
import CONFIG from "@/data/config";

// ensure environmental variables are imported
if (!process.env.AUTH_GOOGLE_ID)
  throw new Error(
    "Google OAuth Client ID not included in environment variables."
  );

if (!process.env.JWT_SECRET)
  throw new Error("JWT secret not included in environment variables.");

if (!process.env.AUTH_GOOGLE_SECRET)
  throw new Error(
    "Google OAuth Client secret not included in environment variables."
  );

if (!process.env.ADMIN_KEY)
  throw new Error("Admin key not included in environment variables.");

//
// config options
//
const expirationDays = 30;
const refreshThreshold = 7 * 24 * 60 * 60 * 1000; // 7 days

const jwtOptions: jwt.SignOptions = {
  expiresIn: `${expirationDays}d`
};

const cookieOptions: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * expirationDays
};

//
// auth actions
//

/**
 * Logs the user in using Google OAuth.
 *
 * @param authCode The authorization code for Google OAuth.
 * @returns Success status, or error message if login fails.
 */
export async function loginWithGoogle(authCode: string) {
  // get tokens from google oauth
  const { tokens } = await oauthClient.getToken(authCode);

  if (!tokens.expiry_date) {
    console.error("No expiry date found in tokens.");
    return { success: false, message: "An unexpected error occurred." };
  }

  if (tokens.expiry_date < Date.now()) {
    console.error("Token expired.");
    return { success: false, message: "An unexpected error occurred." };
  }

  if (!tokens.id_token) {
    console.error("No ID token found.");
    return { success: false, message: "An unexpected error occurred." };
  }

  // verify token
  const ticket = await oauthClient.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.AUTH_GOOGLE_ID
  });

  // check email exists and is verified
  const payload = ticket.getPayload();
  if (!payload) return { success: false, message: "Invalid token." };
  if (!payload.email) return { success: false, message: "No email found." };
  if (!payload.email_verified)
    return { success: false, message: "Email not verified." };

  // check user is admin
  const isAdmin = await checkAdmin(payload.email);
  if (!isAdmin) {
    return { success: false, message: "Not authorized." };
  }

  // store user session
  const user: UserSession = {
    email: payload.email,
    name: payload.name,
    sub: payload.sub,
    tokens,
    lastRefreshed: Date.now()
  };

  const cookieStore = await cookies();
  const token = jwt.sign(user, process.env.JWT_SECRET!, jwtOptions);
  cookieStore.set("session", token, cookieOptions);

  return { success: true };
}

/**
 * Gets the current session and extends it if it is valid.
 *
 * @returns Current session's user, or an error message if the session is invalid.
 */
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session || !session.value)
    return { success: false, message: "No session found" };

  // verify JWT token
  try {
    const decoded = jwt.verify(session.value, process.env.JWT_SECRET!, {
      maxAge: `${expirationDays}d`
    });

    if (typeof decoded === "string")
      return { success: false, message: "Invalid token" };

    if (
      !decoded.email ||
      !decoded.name ||
      !decoded.sub ||
      !decoded.tokens ||
      !decoded.lastRefreshed
    ) {
      console.error("Invalid token payload:", decoded);
      return { success: false, message: "Invalid token payload" };
    }

    const user: UserSession = {
      email: decoded.email,
      name: decoded.name,
      sub: decoded.sub,
      tokens: decoded.tokens,
      lastRefreshed: decoded.lastRefreshed
    };

    // check admin status
    const isAdmin = await checkAdmin(user.email);
    if (!isAdmin) {
      console.error("User is not an admin.");
      return { success: false, message: "Not authorized" };
    }

    // report success
    return { success: true, user };
  } catch (err) {
    console.error("Error verifying session:", err);
    return { success: false, message: String(err) };
  }
}

/**
 * Logs the user out by deleting the session cookie.
 */
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

//
// utility functions
//

/**
 * Refresh the user's access token using the refresh token.
 *
 * @param user The user session containing the refresh token.
 * @returns The updated user session with new tokens, or the same user if tokens don't need to be refreshed.
 * @throws Error if the refresh token is not found or if the refresh fails.
 */
export async function refreshUser(user: UserSession) {
  // ensure user has tokens
  if (!user.tokens || !user.tokens.refresh_token) {
    throw new Error("No refresh token found in user session.");
  }

  // check if the token needs to be refreshed
  if (
    user.lastRefreshed &&
    Date.now() - user.lastRefreshed < refreshThreshold
  ) {
    return user;
  }

  // refresh user tokens
  const client = new UserRefreshClient(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET,
    user.tokens.refresh_token
  );

  const { credentials } = await client.refreshAccessToken();

  const newUser: UserSession = {
    ...user,
    tokens: {
      ...user.tokens,
      access_token: credentials.access_token,
      expiry_date: credentials.expiry_date,
      refresh_token: credentials.refresh_token
    },
    lastRefreshed: Date.now()
  };

  // update session cookie
  const cookieStore = await cookies();
  const token = jwt.sign(newUser, process.env.JWT_SECRET!, jwtOptions);
  cookieStore.set("session", token, cookieOptions);

  return newUser;
}

/**
 * Checks if the calling user is an admin.
 *
 * @returns True if the user is an admin, false otherwise.
 */
export const isAdminSession = async () => {
  const session = await getSession();
  if (!session.success) return false;

  const user = session.user;
  if (!user) return false;

  return true;
};

/**
 * Gets the email of the logged-in user.
 *
 * @returns The user email, or null if the user is not logged in.
 */
export const getEmail = async () => {
  const session = await getSession();
  if (!session.success) return null;

  const user = session.user;
  if (!user) return null;

  return user.email;
};
