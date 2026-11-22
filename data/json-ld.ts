import { CONTACT_CONFIG, SITE_CONFIG } from "./cms-config";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.siteTitle,
  url: SITE_CONFIG.siteUrl,
  logo: `${SITE_CONFIG.siteUrl}/favicon.ico`,
  sameAs: [
    CONTACT_CONFIG.facebook,
    CONTACT_CONFIG.youtube,
    CONTACT_CONFIG.instagram,
  ],
};
