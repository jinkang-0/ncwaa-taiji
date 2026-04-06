if (!process.env.NODE_ENV)
  throw new Error("NODE_ENV is not set in environment variables.");

const CONFIG = {
  siteUrl:
    process.env.NODE_ENV === "production"
      ? "https://caltaiji.org"
      : "http://localhost:3000",
  siteName: "CalTaiji",
  siteDescription: "The official tai chi club at UC Berkeley",
  timezone: "America/Los_Angeles"
};

export default CONFIG;
