import rawInstructorsContent from "@/content/page/instructors.yml";
import { Info_InstructorsSection } from "@/lib/cms";
import InstructorsSection from "../home/instructors-section";

const instructorsContent = rawInstructorsContent as unknown as Info_InstructorsSection;

export default function InstructorsSectionLoader() {
  return (
    <InstructorsSection
      title={instructorsContent.title}
      instructors={instructorsContent.instructors}
    />
  );
}
