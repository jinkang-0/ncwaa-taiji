"use client";

import { createContext, useContext, useState } from "react";

/**
 * This context is used to determine whether the compendium dialog
 * was opened as a result of user action (i.e. clicking on a card)
 * or programmatically (i.e. using a shared link with a search query).
 *
 * This distinction is important to ensure the router does not go back
 * to a different site and stays on the compendium page when the dialog
 * is closed.
 */

interface CompendiumContextValues {
  dialogOpenedNaturally: boolean;
  setDialogOpenedNaturally: (value: boolean) => void;
  isCardDisabled: boolean;
}

const CompendiumContext = createContext<CompendiumContextValues | null>(null);

export const useCompendiumContext = () => {
  const context = useContext(CompendiumContext);
  if (!context) {
    throw new Error(
      "useCompendiumContext must be used within a CompendiumProvider",
    );
  }
  return context;
};

export function CompendiumProvider({
  children,
  cardDisabled = false,
}: {
  children: React.ReactNode;
  cardDisabled?: boolean;
}) {
  const [dialogOpenedNaturally, setDialogOpenedNaturally] = useState(false);

  return (
    <CompendiumContext.Provider
      value={{
        dialogOpenedNaturally,
        setDialogOpenedNaturally,
        isCardDisabled: cardDisabled,
      }}
    >
      {children}
    </CompendiumContext.Provider>
  );
}
