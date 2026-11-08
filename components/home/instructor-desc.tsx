"use client";

import { useState } from "react";
import { ButtonGhost } from "../ui/button";
import styles from "./instructors-section.module.scss";

interface DescriptionProps {
  children?: React.ReactNode;
}

export default function InstructorDescription({ children }: DescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.desc}>
      <div className={`${styles.textbox} ${expanded ? styles.expanded : ""}`}>
        <div className={styles.truncated} aria-hidden>
          {children}
        </div>
        <div className={styles.text}>{children}</div>
      </div>
      <footer>
        <ButtonGhost onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? "show less" : "show more"}
        </ButtonGhost>
      </footer>
    </div>
  );
}
