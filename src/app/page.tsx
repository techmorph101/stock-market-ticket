"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Button
        onClick={() => {
          router.push("/profile");
        }}
      >
        Get Started
      </Button>
    </main>
  );
}
