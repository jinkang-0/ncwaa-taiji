"use client";

import dynamic from "next/dynamic";

const CMSLoader = dynamic(() => import("@/components/admin/loader"), {
  ssr: false,
});

export default function Page() {
  if (typeof window === "undefined") return;

  return <CMSLoader />;
}
