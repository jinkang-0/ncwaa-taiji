import { JWT, OAuth2Client } from "google-auth-library";

// check that environment variables are set
if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  throw new Error("Google service account email not set.");

if (!process.env.GOOGLE_PRIVATE_KEY)
  throw new Error("Google service account private key not set.");

if (!process.env.AUTH_GOOGLE_ID)
  throw new Error(
    "Google OAuth Client ID not included in environment variables."
  );

if (!process.env.AUTH_GOOGLE_SECRET)
  throw new Error(
    "Google OAuth Client secret not included in environment variables."
  );

if (!process.env.BLOG_FOLDER_ID)
  throw new Error("Google Blog folder ID not set.");

// service account auth
export const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: [
    "https://www.googleapis.com/auth/drive"
  ]
});

// oauth client
export const oauthClient = new OAuth2Client(
  process.env.AUTH_GOOGLE_ID,
  process.env.AUTH_GOOGLE_SECRET,
  "postmessage"
);
