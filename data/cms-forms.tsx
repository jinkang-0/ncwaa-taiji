import { CompendiumForms } from "@/lib/cms";
import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";
import z from "zod";

const formsDir = path.join(process.cwd(), "content", "forms");
const forms: Record<string, CompendiumForms> = {};

const formSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  subtitle: z.string(),
  thumbnail: z.string(),
  type: z.enum(["Exercise", "Project", "Competition", "Qigong", "Core"]),
  otherNames: z
    .array(z.string())
    .nullish()
    .transform((v) => v ?? []),
  resources: z
    .array(
      z.object({
        title: z.string(),
        url: z.string(),
      }),
    )
    .optional(),
  videos: z
    .array(
      z.object({
        title: z.string().optional(),
        url: z.string(),
      }),
    )
    .optional(),
}) satisfies z.ZodType<CompendiumForms, unknown>;

export const getForms = async () => {
  if (Object.keys(forms).length > 0) return forms;

  const filePaths = (await fs.readdir(formsDir)).filter((f) => /\.md$/.test(f));

  await Promise.all(
    filePaths.map(async (file) => {
      const rawContent = await fs.readFile(path.join(formsDir, file), "utf8");
      const { data } = matter(rawContent);
      const { success, data: parsedData } = formSchema.safeParse(data);
      if (success) {
        forms[data.id] = parsedData;
      }
    }),
  );

  return forms;
};

export const getForm = async (id: string) => {
  if (Object.keys(forms).length <= 0) {
    await getForms();
  }

  return forms[id];
};
