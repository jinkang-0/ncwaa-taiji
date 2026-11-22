import { sameDay } from "@/lib/utils";

interface BlogTimestampProps {
  visible: boolean;
  timeCreated: Date;
  timeEdited: Date;
}

export default function BlogTimestamp({
  visible,
  timeCreated,
  timeEdited,
}: BlogTimestampProps) {
  if (!visible || !timeCreated) return "Unpublished";

  const dateFormat = {
    month: "long",
    day: "numeric",
    year: "numeric",
  } as const;

  const timeCreatedString = timeCreated.toLocaleDateString(
    undefined,
    dateFormat,
  );
  if (!timeEdited || sameDay(timeCreated, timeEdited)) return timeCreatedString;

  const timeEditedString = timeEdited.toLocaleDateString(undefined, dateFormat);
  return `${timeCreatedString} (Edited ${timeEditedString})`;
}
