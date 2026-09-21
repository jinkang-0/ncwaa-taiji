if (!process.env.NODE_ENV)
  throw new Error("NODE_ENV is not set in environment variables.");

const CONFIG = {
  siteUrl:
    process.env.NODE_ENV === "production"
      ? "https://ncwaataiji.org"
      : "http://localhost:3000",
  siteName: "NCWAA Taiji",
  siteDescription: "The official tai chi program of NCWAA",
  timezone: "America/Los_Angeles"
};

export default CONFIG;
