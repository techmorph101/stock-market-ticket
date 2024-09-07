"use client";

import UserProvider from "@/providers/user/user-provider";
import ProtectedLayout from "../protected-layout";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <ProtectedLayout>
        <main>{children}</main>
      </ProtectedLayout>
    </UserProvider>
  );
}
