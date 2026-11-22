import { getForms } from "@/data/cms-forms";
import { NextResponse } from "next/server";

// static JSON, build once
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(await getForms());
}
