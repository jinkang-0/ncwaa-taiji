"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const CMSCore = dynamic(() => import("@/components/admin/core"), {
  ssr: false,
});

export function CMSCoreLoader() {
  useEffect(() => {
    // Modify error function to suppress legacy DecapCMS prop-type warning
    const originalErrorFn = console.error;
    console.error = (...args: any[]) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("Invalid prop `children` supplied to `ErrorBoundary`")
      ) {
        return;
      }
      originalErrorFn(args);
    };

    return () => {
      console.error = originalErrorFn;
    };
  }, []);

  return <CMSCore />;
}
