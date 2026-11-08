import rawInstructorsContent from "@/content/page/instructors.yml";
import { InstructorsSection as InstructorsSectionType } from "@/lib/cms";
import InstructorsSection from "../home/instructors-section";

const instructorsContent =
  rawInstructorsContent as unknown as InstructorsSectionType;

export default function InstructorsSectionLoader() {
  return (
    <InstructorsSection
      title={instructorsContent.title}
      instructors={instructorsContent.instructors}
    />
  );
}
