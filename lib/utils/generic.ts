import { Types } from "mongoose";
import { Serialize } from "../types";

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

/**
 * Convert a string to a bool. Any capital variation of "false" will be false.
 * Anything else is true.
 */
export const toBool = (val: string) => {
  if (val.toUpperCase() === "FALSE") return false;
  return true;
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
  doc: T,
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

/**
 * Ensure link is prefixed with http://
 * or https://
 */
export const formalizeLink = (link: string) => {
  if (link.match(/^https?:\/\//)) return link;
  return `https://${link}`;
};
