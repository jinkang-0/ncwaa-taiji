"use client";

import { usePathname } from "next/navigation";
import { DefaultHero } from "./hero";

export default function ConditionalHero() {
  const pathname = usePathname();
  return pathname === "/" ? (
    <DefaultHero />
  ) : (
    <div style={{ marginTop: "32px" }} />
  );
}
