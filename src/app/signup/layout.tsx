"use client";

import UserProvider from "@/providers/user/user-provider";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserProvider>{children}</UserProvider>;
}
