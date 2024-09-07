"use client";

import useUser from "@/providers/user/use-user-context";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { useState } from "react";
import { signupUserWithEmail } from "@/api/auth";

interface SignupFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignupForm({ className, ...props }: SignupFormProps) {
  const { signIn } = useUser();

  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUpWithEmail = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      setLoading(true);
      await signupUserWithEmail(email, email, password);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {step === 1 && (
            <>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="password"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="password"
                  autoCorrect="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="confirm-password">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  placeholder="confirm password"
                  type="password"
                  autoCapitalize="none"
                  autoCorrect="off"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </>
          )}
          <Button
            type="button"
            disabled={loading}
            onClick={async () => {
              if (step === 0) {
                setStep(1);
              } else {
                await handleSignUpWithEmail();
              }
            }}
          >
            Sign In with Email
          </Button>
        </div>
      </form>

      {step === 0 && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            type="button"
            disabled={loading}
            onClick={signIn}
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>{" "}
        </>
      )}
    </div>
  );
}
