import type { Metadata, Viewport } from "next";
import { SITE_CONFIG } from "@/data/cms-config";
import { jsonLd } from "@/data/json-ld";
import ProgressBarProvider from "@/components/ui/progress-bar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAnalytics } from "@next/third-parties/google";

// load global styles
import "./globals.scss";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { kaushanScript, sen } from "@/lib/fonts";

// ensure environmental variables are imported
if (!process.env.AUTH_GOOGLE_ID)
  throw new Error(
    "Google OAuth Client ID not included in environment variables.",
  );

// site metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#282b2f",
};

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.siteTitle,
    template: `%s | ${SITE_CONFIG.siteTitle}`,
  },
  creator: SITE_CONFIG.siteTitle,
  publisher: SITE_CONFIG.siteTitle,
  applicationName: SITE_CONFIG.siteTitle,
  description: SITE_CONFIG.siteDescription,
  keywords: [
    "taiji at berkeley",
    "tai chi at berkeley",
    "ncwaa taiji",
    "ncwaa tai chi",
    "ncwa tai chi",
    "ncwa tai chi",
    "berkeley chinese martial arts",
    "berkeley martial arts",
    "bay area chinese martial arts",
    "bay area martial arts",
    "bay area taiji",
    "bay area tai chi",
    "bryant fong tai chi",
    "bryant fong taiji",
    "martial arts taiji bay area",
    "taiji bay area",
    "tai chi bay area",
    "taiji berkeley",
    "tai chi berkeley",
    "berkeley taiji",
    "berkeley tai chi",
    "uc berkeley taiji",
    "uc berkeley tai chi",
    "ucmap taiji",
    "ucmap tai chi",
    "uc martial arts program taiji",
    "uc martial arts program tai chi",
    "uc martial arts taiji",
    "uc martial arts tai chi",
    "uc taiji",
    "uc tai chi",
    "caltaiji",
  ],
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  openGraph: {
    siteName: SITE_CONFIG.siteTitle,
    title: SITE_CONFIG.siteTitle,
    description: SITE_CONFIG.siteDescription,
    url: SITE_CONFIG.siteUrl,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${kaushanScript.variable} ${sen.variable}`}>
        <GoogleOAuthProvider clientId={process.env.AUTH_GOOGLE_ID || ""}>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </GoogleOAuthProvider>
      </body>
      <GoogleAnalytics gaId="G-3TN3Q2XMMR" />
    </html>
  );
}
