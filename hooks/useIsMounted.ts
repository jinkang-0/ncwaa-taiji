"use client";

import { useSyncExternalStore } from "react";

export function useIsMounted(subscribe = () => () => {}) {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
