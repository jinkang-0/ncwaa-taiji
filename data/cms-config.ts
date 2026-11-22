import rawContactContent from "@/content/config/contacts.yml";
import rawSiteContent from "@/content/config/site.yml";
import { Contacts, SiteConfig } from "@/lib/cms";

const contactContent = rawContactContent as unknown as Contacts;
const siteContent = rawSiteContent as unknown as SiteConfig;

export const CONTACT_CONFIG = {
  instagram: contactContent.instagram,
  facebook: contactContent.facebook,
  youtube: contactContent.youtube,
  email: contactContent.email,
};

export const SITE_CONFIG = {
  siteTitle: siteContent.siteTitle,
  compendiumTabTitle: siteContent.compendiumTabTitle,
  blogTabTitle: siteContent.blogTabTitle,
  siteDescription: siteContent.siteDescription,
  siteUrl:
    process.env.NODE_ENV === "production"
      ? siteContent.siteUrl
      : "http://localhost:3000",
};
