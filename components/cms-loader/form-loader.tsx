import { CompendiumForms } from "@/lib/cms";
import path from "node:path";
import fs from "node:fs/promises";
import yaml from "yaml";

const formsDir = path.join(process.cwd(), "content", "forms");
const forms: Record<string, CompendiumForms> = {};

export const getForms = async () => {
  if (Object.keys(forms).length > 0) return forms;

  const filePaths = (await fs.readdir(formsDir)).filter((f) =>
    /\.ya?ml$/.test(f),
  );

  await Promise.all(
    filePaths.map(async (file) => {
      const rawContent = await fs.readFile(path.join(formsDir, file), "utf8");
      const data = yaml.parse(rawContent) as CompendiumForms;
      forms[data.id] = data;
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
