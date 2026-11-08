import { nth } from "./generic";
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
  const dt = DateTime.fromFormat(`${date} ${t}`, "DDD t", {
    zone: CONFIG.timezone,
  });
  if (dt.isValid) return base.getTime() < dt.toMillis();

  // try with date only
  const d = DateTime.fromFormat(date, "DDD", { zone: CONFIG.timezone });
  if (d.isValid) return base.getTime() < d.toMillis();

  // invalid date
  return false;
};
