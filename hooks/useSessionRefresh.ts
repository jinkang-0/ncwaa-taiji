"use client";

import { useEffect } from "react";
import { refreshUser } from "@/actions/auth";
import { UserSession } from "@/lib/types";

export function useSessionRefresh(user: UserSession) {
  useEffect(() => {
    const refreshSession = async () => {
      await refreshUser(user);
    };

    refreshSession();
  }, []);
}
