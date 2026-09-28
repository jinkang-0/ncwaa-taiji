"use client";

import { useEffect, useRef, useState } from "react";
import { useBlogContext } from "../context-blog";
import LoadingIcon from "@/icons/loading";
import Checkmark from "@/icons/checkmark";
import styles from "./saving-indicator.module.scss";
import CloudOff from "@/icons/editor/cloud-off";

function Indicator({ status }: { status: "saving" | "saved" | "unsaved" }) {
  if (status === "saving") {
    return (
      <div className={styles.saving}>
        <LoadingIcon />
        <span>Saving...</span>
      </div>
    );
  }

  if (status === "unsaved") {
    return (
      <div className={styles.unsaved}>
        <CloudOff />
        <span>Unsaved</span>
      </div>
    );
  }

  return (
    <div className={styles.saved}>
      <Checkmark />
      <span>Saved</span>
    </div>
  );
}

export default function SavingIndicator() {
  const { status } = useBlogContext();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Note: This can be refactored to use an event-trigger instead of simple timer.
  // This will be deprecated soon in favor of DecapCMS, rather than in-app editor.
  useEffect(() => {
    // Reset previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (status === "unsaved" || status === "saving") {
      // eslint-disable-next-line
      setVisible(true);
    } else {
      timerRef.current = setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  }, [status]);

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      <Indicator status={status} />
    </div>
  );
}
