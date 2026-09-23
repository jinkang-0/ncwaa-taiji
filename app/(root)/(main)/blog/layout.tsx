import AuthStatus from "@/components/auth/auth-status";
import React from "react";

export default function BlogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthStatus />

      {children}
    </>
  );
}
