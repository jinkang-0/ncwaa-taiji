"use client";

import CMS from "decap-cms-app";
import { useEffect, useState } from "react";
import InfoPagePreview from "./info/info-page-preview";

export default function CMSLoader() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized || typeof window === "undefined") return;
    setInitialized(true);

    CMS.init();
    CMS.registerPreviewStyle("admin/global.css");
    CMS.registerPreviewTemplate("info", InfoPagePreview);
  }, []);

  return <></>;
}
