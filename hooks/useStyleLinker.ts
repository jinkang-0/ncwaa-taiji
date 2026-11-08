"use client";

import { useEffect } from "react";
import { PreviewTemplateComponentProps } from "decap-cms-core";

const isSiteStyle = (node: HTMLElement) => {
  // Emotion-generated styles from Decap; not site styles
  if (node.hasAttribute("data-emotion")) return false;

  // Prod: extracted CSS chunks
  if (node.matches('link[rel="stylesheet"][href*="/_next/"]')) return true;

  // Dev/Prod: inline styles
  return node.matches("style[data-precedence], link[data-precedence]");
};

export const useStyleLinker = (props: PreviewTemplateComponentProps) => {
  return useEffect(() => {
    if (typeof window === "undefined") return;

    const target = props.document.head;
    const existing = new Set(
      [...target.children]
        .map((n) => n.getAttribute("data-cloneKey"))
        .filter(Boolean),
    );

    document.head
      .querySelectorAll('link[rel="stylesheet"], style')
      .forEach((n) => {
        const node = n as HTMLElement;
        if (!isSiteStyle(node)) return;

        const key = node.getAttribute("href") || node.textContent;
        if (existing.has(key)) return;

        const clone = node.cloneNode(true) as HTMLElement;
        clone.setAttribute("data-cloneKey", key);
        target.appendChild(clone);
        existing.add(key);
      });
  }, [props.document]);
};
