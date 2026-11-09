"use client";

import { CompendiumForms } from "@/lib/cms";
import { jsonFetcher } from "@/lib/utils";
import { createContext, useContext } from "react";
import useSWR from "swr";

interface FormsContextType {
  forms: Record<string, CompendiumForms>;
  isLoading: boolean;
}

const FormsContext = createContext<FormsContextType | null>(null);

export const useFormsContext = () => {
  const context = useContext(FormsContext);
  if (!context) {
    throw new Error(
      "useFormsContext must be used within a FormsContextProvider",
    );
  }
  return context;
};

export default function FormsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: forms,
    error,
    isLoading,
  } = useSWR("/api/getForms", jsonFetcher);

  return (
    <FormsContext.Provider value={{ forms: error ? {} : forms, isLoading }}>
      {children}
    </FormsContext.Provider>
  );
}
