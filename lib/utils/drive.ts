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
