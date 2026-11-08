import AttachmentIcon from "@/icons/attachment";
import { LinkButtonGhost } from "../ui/button";
import FileIcon from "@/icons/file";
import ImageIcon from "@/icons/image";
import WebIcon from "@/icons/web";

export interface EventAttachmentItemType {
  name: string;
  url: string;
  type?: "Website" | "File" | "Image" | "General";
}

interface AttachmentItemProps {
  item: EventAttachmentItemType;
}

interface AttachmentItemIconProps {
  type: EventAttachmentItemType["type"];
}

function EventAttachmentItemIcon({ type }: AttachmentItemIconProps) {
  switch (type) {
    case "File":
      return <FileIcon />;
    case "Image":
      return <ImageIcon />;
    case "Website":
      return <WebIcon />;
    case "General":
    default:
      return <AttachmentIcon />;
  }
}

export default function EventAttachmentItem({ item }: AttachmentItemProps) {
  return (
    <LinkButtonGhost
      href={item.url}
      target="_blank"
      title={item.name || "Attachment"}
      aria-label={item.name || "Attachment"}
    >
      <EventAttachmentItemIcon type={item.type} />
    </LinkButtonGhost>
  );
}
