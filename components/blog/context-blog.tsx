"use client";

import { updateBlog } from "@/actions/db";
import { BlogType } from "@/actions/setup/mongoose";
import { PopulatedBlog } from "@/lib/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
  useTransition,
} from "react";

interface BlogContextProps {
  blog: PopulatedBlog;
  setBlogState: Dispatch<SetStateAction<PopulatedBlog>>;
  saveBlog: (data: Partial<BlogType>) => Promise<boolean>;
  reportEdit: () => void;
  status: "unsaved" | "saving" | "saved";
}

const BlogContext = createContext<BlogContextProps | null>(null);

export const useBlogContext = () => {
  const ctx = useContext(BlogContext);
  if (!ctx) {
    throw new Error("useBlogContext must be used within a BlogContextProvider");
  }
  return ctx;
};

export function BlogContextProvider({
  children,
  blog,
}: {
  children: React.ReactNode;
  blog: PopulatedBlog;
}) {
  const [blogState, setBlogState] = useState<PopulatedBlog>(blog);
  const [isUnsaved, setUnsaved] = useState(false);
  const [isSaving, startSaving] = useTransition();
  const status = useMemo(
    () => (isSaving ? "saving" : isUnsaved ? "unsaved" : "saved"),
    [isSaving, isUnsaved],
  );

  const reportEdit = useCallback(() => {
    setUnsaved(true);
  }, []);

  const saveBlog = useCallback(
    async (data: Partial<BlogType>) => {
      const result = updateBlog(blogState._id, data);
      startSaving(async () => {
        await result;
      });
      const awaitedResult = await result;
      setUnsaved(false);
      return awaitedResult;
    },
    [startSaving, blogState._id],
  );

  return (
    <BlogContext.Provider
      value={{ blog: blogState, setBlogState, status, reportEdit, saveBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
}
