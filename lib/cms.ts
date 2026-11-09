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

export interface Landing_CommunityPhotos {
  image: string;
  caption: string;
}

export interface Landing {
  title: string;
  subtitle: any;
  landingPhoto: string;
  communityPhotos: Landing_CommunityPhotos[];
}

export interface AboutSection {
  title: string;
  introVideo: string;
  showIntroVideo: boolean;
  section1Text: any;
  section2Text: any;
}

export type ScheduleSection_Schedule_DayOfTheWeek_options =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export interface ScheduleSection_Schedule {
  day: ScheduleSection_Schedule_DayOfTheWeek_options;
  startTime: string;
  endTime: string;
  location: string;
  locationAlternative?: string;
}

export interface ScheduleSection {
  title: string;
  introText: any;
  showSpecialAnnouncement: boolean;
  specialAnnouncement: string;
  classStartDate: string;
  classEndDate: string;
  registrationStartDate: string;
  forceClassInSession: boolean;
  showSchedule: boolean;
  schedule: ScheduleSection_Schedule[];
  registrationLink: string;
  registrationLinkSecondary: string;
  subtext: any;
}

export type EventsSection_Events_Attachments_Type_options =
  | "Website"
  | "File"
  | "Image"
  | "General";

export interface EventsSection_Events_Attachments {
  name: string;
  url: string;
  type: EventsSection_Events_Attachments_Type_options;
}

export interface EventsSection_Events {
  name: string;
  date: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  location: string;
  locationUrl?: string;
  attachments: EventsSection_Events_Attachments[];
}

export interface EventsSection {
  title: string;
  events: EventsSection_Events[];
  maxEvents: number;
}

export interface InstructorsSection_Instructors {
  portrait: string;
  fullName: string;
  role: string;
  biography: any;
}

export interface InstructorsSection {
  title: string;
  instructors: InstructorsSection_Instructors[];
}

export interface FAQSection_FAQs {
  question: string;
  answer: any;
}

export interface FAQSection {
  title: string;
  subtext: any;
  faqs: FAQSection_FAQs[];
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

export interface Blogs {
  title: string;
  thumbnail: string;
  authors: string[];
  summary: string;
  content: any;
}

export type CompendiumForms_Type_options =
  | "Exercise"
  | "Project"
  | "Competition"
  | "Qigong"
  | "Core";

export interface CompendiumForms_Videos {
  title?: string;
  url: string;
}

export interface CompendiumForms_Resources {
  title: string;
  url: string;
}

export interface CompendiumForms {
  id: string;
  name: string;
  thumbnail: string;
  type: CompendiumForms_Type_options;
  otherNames: string[];
  subtitle: string;
  description: any;
  videos?: CompendiumForms_Videos[];
  resources?: CompendiumForms_Resources[];
}
