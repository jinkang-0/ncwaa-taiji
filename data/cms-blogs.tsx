import { Blogs } from "@/lib/cms";
import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";
import z from "zod";

const blogsDir = path.join(process.cwd(), "content", "blogs");
const blogs: Record<string, Blogs> = {};

const blogSchema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  authors: z.array(z.string()),
  summary: z.string(),
  content: z.string(),
  visible: z.boolean(),
  timeCreated: z.date(),
  timeEdited: z.date(),
  imageOffset: z.number(),
}) satisfies z.ZodType<Blogs, unknown>;

export const getBlogs = async () => {
  if (Object.keys(blogs).length === 0) {
    const blogPaths = (await fs.readdir(blogsDir)).filter((f) =>
      /\.md$/.test(f),
    );

    await Promise.all(
      blogPaths.map(async (blog) => {
        const rawContent = await fs.readFile(path.join(blogsDir, blog), "utf8");
        const { data } = matter(rawContent);
        const { success, data: parsedData } = blogSchema.safeParse(data);
        if (success) {
          blogs[data.id] = parsedData;
        }
      }),
    );
  }

  return Object.values(blogs).toSorted((a, b) => b.timeCreated - a.timeCreated);
};

export const getBlog = async (id: string) => {
  if (Object.keys(blogs).length <= 0) {
    await getBlogs();
  }

  return blogs[id];
};
