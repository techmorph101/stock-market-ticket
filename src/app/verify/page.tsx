"use client";

import { verifyEmail } from "@/api/user";
import { LoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const params = useSearchParams();

  useEffect(() => {
    const token = params.get("token");

    if (token) {
      setLoading(true);
      verifyEmail(token)
        .then(() => {})
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [params]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {loading ? (
        <div className="flex items-center">
          <LoaderCircle className="h-4 w-4 animate-spin" />
          Please wait while we verify your email ...
        </div>
      ) : error ? (
        <div>Failed to verify your email. Try again</div>
      ) : (
        <div>
          Your email has been verified. <a href="/profile">Click here</a> to
          access to platform.
        </div>
      )}
    </div>
  );
};

export default VerifyPage;
