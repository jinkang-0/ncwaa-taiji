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

/**
 * Ensure link is prefixed with http://
 * or https://
 */
export const formalizeLink = (link: string) => {
  if (link.match(/^https?:\/\//)) return link;
  return `https://${link}`;
};

/**
 * Duplicates the same object by a specified amount, modifying a specified key for each clone.
 * Returns a list of the clones, with the original object in index 0.
 */
export const enumerateData = <T>(
  object: T,
  amt: number,
  transformer: (v: T, idx: number) => T,
): T[] => {
  const clones = [object];
  let current = object;
  for (let i = 1; i < amt; i++) {
    current = transformer(current, i);
    clones.push(current);
  }
  return clones;
};

/**
 * Creates a new array with contents from both arrays if they are valid and non-empty.
 * Items are placed in order, elements from array A first, then array B.
 * If both arrays are invalid, outputs an empty array.
 */
export const optionalJoin = <E, T extends Array<E> | undefined>(
  arrA: T,
  arrB: T,
) => {
  if (arrA && arrB && arrA.length > 0 && arrB.length > 0) {
    return [...arrA, ...arrB];
  } else if (arrA && arrA.length > 0) {
    return arrA;
  } else if (arrB && arrB.length > 0) {
    return arrB;
  }
  return [];
};
