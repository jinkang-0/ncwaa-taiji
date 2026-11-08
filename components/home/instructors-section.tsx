import Image from "next/image";
import styles from "./instructors-section.module.scss";
import InstructorDescription from "./instructor-desc";
import MarkdownParser from "../ui/markdown";
import { Info_InstructorsSection_Instructors } from "@/lib/cms";

export interface InstructorsSectionProps {
  title: string;
  instructors: Info_InstructorsSection_Instructors[];
}

export default function InstructorsSection({
  title,
  instructors,
}: InstructorsSectionProps) {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.container}>
        {instructors.map((inst) => (
          <div key={inst.fullName} className={styles.card}>
            <div className={styles.portrait}>
              <Image
                src={inst.portrait}
                alt={inst.fullName}
                width={240}
                height={320}
              />
              <Image
                className={styles.ambiance}
                src={inst.portrait}
                alt="ambiance"
                width={240}
                height={320}
              />
            </div>
            <div className={styles.content}>
              <h5>{inst.fullName}</h5>
              <h6>{inst.role}</h6>
              <InstructorDescription>
                <MarkdownParser>{inst.biography}</MarkdownParser>
              </InstructorDescription>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
