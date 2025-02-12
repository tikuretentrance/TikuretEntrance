"use client";

import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export function UserNav() {
  const { isSignedIn, isLoaded } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // render loader until the component is mounted and auth is loaded
  if (!mounted || !isLoaded) {
    return (
      <Button variant="ghost" disabled>
        Loading...
        <Loader className="mr-2" />
      </Button>
    );
  }

  if (isSignedIn) {
    return (
      <div className="flex items-center space-x-4">
        <Link href="/dashboard">
          <Button variant="ghost">Dashboard</Button>
        </Link>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-8 w-8"
            }
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <Button variant="ghost" asChild>
        <Link href="/sign-in">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </div>
  );
}