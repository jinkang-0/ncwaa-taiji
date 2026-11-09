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
  if (url.hostname === "youtu.be") videoId = url.pathname.replace(/^\//, "");

  if (!videoId) return "";
  return `https://www.youtube.com/embed/${videoId}`;
};

export const getVideoId = (link: string) => {
  const url = new URL(link);
  if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
    return url.searchParams.get("v") ?? "";
  } else if (url.hostname === "youtu.be") {
    return url.pathname.split("/")[1] ?? "";
  }
  return "";
};

export const getThumbnail = (link: string) => {
  const videoId = getVideoId(link);
  if (!videoId) return "";
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};
