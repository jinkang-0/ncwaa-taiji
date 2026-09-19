"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { serviceAccountAuth } from "@/actions/setup/google";
import { ConfigItem, ScheduleSettings } from "@/lib/types";
import { newUTCDate } from "@/lib/utils";

if (!process.env.SPREADSHEET_ID)
  throw new Error("Spreadsheet ID is not specified in environment variables.");

const doc = new GoogleSpreadsheet(
  process.env.SPREADSHEET_ID,
  serviceAccountAuth
);

// load docs
let initialized: boolean | Promise<void> = false;
const loadDoc = async () => {
  if (initialized) return initialized;
  initialized = doc.loadInfo();
  await initialized;
};
loadDoc();

// helper function to load spreadsheet
export const getSheet = async (sheetTitle: string, headerRow = 2) => {
  await loadDoc();
  const sheet = doc.sheetsByTitle[sheetTitle];
  await sheet.loadHeaderRow(headerRow);
  const rows = await sheet.getRows();
  return rows.map((row) => row.toObject());
};

// preset functions
export const getSchedule = async () => {
  return await getSheet("Schedule");
};

export const getEvents = async () => {
  return await getSheet("Events");
};

export const loadScheduleSettings = async () => {
  const configRows = (await getSheet("Config")) as ConfigItem[];
  const configMap = configRows.reduce(
    (acc, row) => {
      acc[row.Key] = row.Assumed;
      return acc;
    },
    {} as Record<string, string>
  );

  const classStartDate = configMap.CLASS_START_DATE
    ? newUTCDate(configMap.CLASS_START_DATE)
    : undefined;

  const classEndDate = configMap.CLASS_END_DATE
    ? newUTCDate(configMap.CLASS_END_DATE)
    : undefined;

  const registrationStartDate = configMap.REGISTRATION_START_DATE
    ? newUTCDate(configMap.REGISTRATION_START_DATE)
    : undefined;

  const announcement = configMap.ANNOUNCEMENT;
  const showSchedule = configMap.SHOW_SCHEDULE === "TRUE" || false;

  // derived
  const today = new Date();
  let classInSession = configMap.CLASS_IN_SESSION === "TRUE" || false;
  if (
    configMap.CLASS_IN_SESSION !== "FALSE" &&
    classStartDate &&
    classEndDate
  ) {
    classInSession = today >= classStartDate && today <= classEndDate;
  }

  const registrationOpen = configMap.REGISTRATION_OPEN === "TRUE" || false;

  const settings: ScheduleSettings = {
    classStartDate,
    classEndDate,
    registrationStartDate,
    classInSession,
    registrationOpen,
    announcement,
    showSchedule
  };

  return settings;
};
