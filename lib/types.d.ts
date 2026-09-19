import type { StaticImageData } from "next/image";
import type {
  DefaultSchemaOptions,
  Schema as SchemaType,
  Types
} from "mongoose";
import { getBlogByBlogId } from "@/actions/db";

// nextjs metadata generation props
interface GenerateMetadataProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// auth
interface UserSession {
  email: string;
  name?: string;
  sub: string;
  tokens?: Credentials;
  lastRefreshed?: number; // timestamp of last token refresh
}

// compendium
type CompendiumCategory =
  | "Exercises"
  | "Qigong"
  | "Core"
  | "Competition"
  | "Project";

interface CompendiumItem {
  id: string;
  title: string;
  description: string;
  otherNames: string[];
  category: CompendiumCategory;
  image: string | StaticImageData;
}

// types for home page data
interface Event {
  name: string;
  fromDate: string;
  toDate?: string;
  from: string;
  to: string;
  location: string;
  attachments: string[];
}

interface GalleryItem {
  image: StaticImageData;
  caption: string;
}

interface ScheduleItem {
  Day: string;
  From: string;
  To: string;
  Location: string;
  Alternative?: string;
}

interface ConfigItem {
  Key: keyof ScheduleSettings;
  Assumed: string;
}

interface ScheduleSettings {
  registrationStartDate?: Date;
  classStartDate?: Date;
  classEndDate?: Date;
  classInSession?: boolean;
  registrationOpen: boolean;
  announcement?: string;
  showSchedule: boolean;
}

// database objects

type PopulatedBlog = Awaited<ReturnType<typeof getBlogByBlogId>>[0];

// utility types

type ModelTypeFromSchema<S> =
  S extends SchemaType<unknown, infer Model> ? Model : never;

type TypeFromSchema<S> =
  S extends SchemaType<
    unknown,
    ModelTypeFromSchema<S>,
    object,
    object,
    object,
    object,
    DefaultSchemaOptions,
    infer DocType
  >
    ? DocType
    : never;

type Prettify<T> = {} & {
  [K in keyof T]: T[K];
};

type Serialize<T> = {
  [K in keyof T]: T[K] extends Types.ObjectId
    ? string
    : T[K] extends Array<infer U>
      ? Array<Serialize<U>>
      : T[K] extends object
        ? Serialize<T[K]>
        : T[K];
};
