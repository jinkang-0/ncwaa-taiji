"use client";

import dynamic from "next/dynamic";

const CMSCore = dynamic(() => import("@/components/admin/core"), {
  ssr: false,
});

export function CMSCoreLoader() {
  return <CMSCore />;
}
