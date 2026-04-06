import { Types } from "mongoose";
import { Serialize } from "./types";
import { DateTime } from "luxon";
import CONFIG from "@/data/config";

/**
 * Get the month from a string of the format "Jan 1, 2025"
 */
export const getMonth = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en", { month: "short" });
};

/**
 * Get the date from a string of the format "Jan 1, 2025"
 * Example: "Jan 1, 2025" -> 1
 */
export const getDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.getDate();
};

/**
 * Gets the time in milliseconds from a date string.
 * Example: "Jan 1, 2025" -> 1735689600000
 */
export const getTime = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.getTime();
};

export const nth = (d: number) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const newUTCDate = (date: string) => {
  return new Date(`${date}T00:00`);
};

/**
 * Parses a date string into a more readable format.
 * Example: "2025-02-01" -> "Feb 1, 2025"
 */
export const parseDate = (date: string) => {
  const dateObj = newUTCDate(date);
  return parseDateObj(dateObj);
};

export const parseDateObj = (dateObj: Date) => {
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleDateString("en", { month: "short" });
  const day = dateObj.getDate();
  return `${month} ${day}${nth(day)}, ${year}`;
};

/**
 * Returns true if a provided date
 * comes before a provided date and time.
 */
export const compareDate = (base: Date, date: string, t: string) => {
  // try with date and time
  const dt = DateTime.fromFormat(`${date} ${t}`, "DD t", {
    zone: CONFIG.timezone
  });
  if (dt.isValid) return base.getTime() < dt.toUTC().toMillis();

  // try with date only
  const dt2 = DateTime.fromFormat(date, "DD", { zone: CONFIG.timezone });
  if (dt2.isValid) return base.getTime() < dt2.toUTC().toMillis();

  // invalid date
  return false;
};

/**
 * Convert a string to a bool. Any capital variation of "false" will be false.
 * Anything else is true.
 */
export const toBool = (val: string) => {
  if (val.toUpperCase() === "FALSE") return false;
  return true;
};

/**
 * Get the embed link for a YouTube video.
 * Input 1: https://www.youtube.com/watch?v=fRA7bMWEpjo&t=1s
 * Input 2: https://youtu.be/fRA7bMWEpjo?si=YVnhxD_Dk2fbc31o
 * Input 3: https://www.youtube.com/embed/fRA7bMWEpjo?si=nZDt7KKhKbociiLQ
 */
export const getYTEmbed = (link: string) => {
  const url = new URL(link);

  let videoId: string | null = null;
  if (url.pathname.startsWith("/embed")) videoId = url.pathname.split("/")[2];
  if (url.pathname.startsWith("/watch")) videoId = url.searchParams.get("v");
  if (url.hostname === "youtu.be") videoId = url.pathname;

  if (!videoId) return "";
  return `https://www.youtube.com/embed/${videoId}?mute=1`;
};

/**
 * Get the file ID of a Google Drive file.
 * Input: https://drive.google.com/file/d/abc/view
 * Output: abc
 */
export const getFileId = (link: string) => {
  const url = new URL(link);
  if (url.hostname !== "drive.google.com") return "";
  if (!url.pathname.startsWith("/file/d/")) return "";
  return url.pathname.split("/")[3];
};

/**
 * Transform a Google Drive share link to a user content download link.
 * Input: abc
 * Output: https://drive.usercontent.google.com/download?id=abc
 */
export const gDriveToDownload = (fileId: string) => {
  return `https://drive.usercontent.google.com/download?id=${fileId}`;
};

export const getVideoId = (link: string) => {
  const url = new URL(link);
  if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
    return url.searchParams.get("v");
  } else if (url.hostname === "youtu.be") {
    return url.pathname.split("/")[1];
  }
  return null;
};

export const getThumbnail = (link: string) => {
  const videoId = getVideoId(link);
  if (!videoId) return "";
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

/**
 * Formats a list of strings into a grammatically correct sentence.
 *
 * formatList(["Apple"]) => "Apple"
 * formatList(["Apple", "Banana"]) => "Apple and Banana"
 * formatList(["Apple", "Banana", "Citrus"]) => "Apple, Banana, and Citrus"
 */
export const formatList = (items: string[], joinTerm = " and "): string => {
  if (items.length == 0) return "";
  if (items.length == 1) return items[0];
  if (items.length == 2) return items.join(joinTerm);

  const firstTerms = items.slice(0, items.length - 1).join(", ");
  const lastItem = items[items.length - 1];
  return `${firstTerms},${joinTerm}${lastItem}`;
};

export const serializeLeanDoc = <T>(
  doc: T
): T extends Types.ObjectId
  ? string
  : T extends Array<infer U>
    ? Array<Serialize<U>>
    : T extends object
      ? Serialize<T>
      : T => {
  if (doc instanceof Array) return doc.map((d) => serializeLeanDoc(d)) as never;

  if (doc instanceof Types.ObjectId) return doc.toString() as never;

  if (!(doc instanceof Date) && typeof doc === "object") {
    const result: Record<string, unknown> = {};
    for (const key in doc) {
      result[key] = serializeLeanDoc((doc as never)[key]);
    }
    return result as never;
  }

  return doc as never;
};
