/* eslint-disable */
export interface SiteConfig {
  siteTitle: string;
  compendiumTabTitle: string;
  blogTabTitle: string;
}

export interface Contacts {
  instagram: string;
  facebook: string;
  youtube: string;
  email: string;
}

export interface Info_CommunityPhotos {
  image: string;
  caption: string;
}

export interface Info_AboutSection {
  title: string;
  introVideo: string;
  showIntroVideo: boolean;
  section1Text: any;
  section2Text: any;
}

export interface Info_ScheduleSection_Schedule {
  day: string;
  startTime: string;
  endTime: string;
  location: string;
  locationAlternative?: string;
}

export interface Info_ScheduleSection {
  title: string;
  introText: any;
  showSpecialAnnouncement: boolean;
  specialAnnouncement: string;
  classStartDate: string;
  classEndDate: string;
  registrationStartDate: string;
  forceClassInSession: boolean;
  showSchedule: boolean;
  schedule: Info_ScheduleSection_Schedule[];
  registrationLink: string;
  registrationLinkSecondary: string;
  subtext: any;
}

export type Info_EventsSection_Events_Attachments_Type_options = "Website" | "File" | "Image" | "General";

export interface Info_EventsSection_Events_Attachments {
  name: string;
  url: string;
  type: Info_EventsSection_Events_Attachments_Type_options;
}

export interface Info_EventsSection_Events {
  name: string;
  date: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  location: string;
  locationUrl?: string;
  attachments: Info_EventsSection_Events_Attachments[];
}

export interface Info_EventsSection {
  title: string;
  events: Info_EventsSection_Events[];
  maxEvents: number;
}

export interface Info_FAQSection_FAQs {
  question: string;
  answer: any;
}

export interface Info_FAQSection {
  title: string;
  subtext: any;
  faqs: Info_FAQSection_FAQs[];
}

export interface Info_InstructorsSection_Instructors {
  portrait: string;
  fullName: string;
  role: string;
  biography: any;
}

export interface Info_InstructorsSection {
  title: string;
  instructors: Info_InstructorsSection_Instructors[];
}

export interface Info {
  title: string;
  subtitle: string;
  landingPhoto: string;
  communityPhotos: Info_CommunityPhotos[];
  aboutSection: Info_AboutSection;
  scheduleSection: Info_ScheduleSection;
  eventsSection: Info_EventsSection;
  faqSection: Info_FAQSection;
  instructorsSection: Info_InstructorsSection;
}

export type Compendium_Collections_Type_options = "Featured" | "Default";

export interface Compendium_Collections {
  title: string;
  type: Compendium_Collections_Type_options;
  forms: string[];
}

export interface Compendium {
  collections: Compendium_Collections[];
}

export interface Blog_blogs {
  title: string;
  thumbnail: string;
  authors: string[];
  summary: string;
  content: any;
}

export interface Blog {
  blogs: Blog_blogs[];
}

export type Forms_Type_options = "Exercise" | "Project" | "Competition" | "Qigong" | "Core";

export interface Forms {
  name: string;
  thumbnail: string;
  type: Forms_Type_options;
  otherNames: string[];
  subtitle: string;
  description: any;
}
