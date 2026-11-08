import contactContent from "@/content/config/contacts.yml";
import siteContent from "@/content/config/site.yml";

export const CONTACT_CONFIG = {
  instagram: contactContent.instagram as string,
  facebook: contactContent.facebook as string,
  youtube: contactContent.youtube as string,
  email: contactContent.email as string,
};

export const SITE_CONFIG = {
  siteTitle: siteContent.siteTitle as string,
  compendiumTabTitle: siteContent.compendiumTabTitle as string,
  blogTabTitle: siteContent.blogTabTitle as string,
};
