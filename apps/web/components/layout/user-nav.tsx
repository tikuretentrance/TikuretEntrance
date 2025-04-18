'use client';

import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

interface UserNavProps {
  isMobile?: boolean;
}

export function UserNav({ isMobile = false }: UserNavProps) {
  const { isSignedIn, isLoaded } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return (
      <Button variant="ghost" disabled>
        <Loader className="h-4 w-4 animate-spin" />
        <span className="ml-2">Loading...</span>
      </Button>
    );
  }

  if (isSignedIn) {
    return (
      <div className={`flex items-center ${isMobile ? 'flex-col space-y-2' : 'space-x-4'}`}>
        <Link href="/dashboard">
          <Button variant="ghost" className={isMobile ? 'w-full justify-start' : ''}>
            Dashboard
          </Button>
        </Link>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8"
            }
          }}
        />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2">
        <Link href="/sign-in" className="w-full">
          <Button variant="ghost" className="w-full justify-start">
            Login
          </Button>
        </Link>
        <Link href="/sign-up" className="w-full">
          <Button className="justify-start">
          Get Started
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      {/* <Button variant="ghost" asChild>
        <Link href="/sign-in">Login</Link>
      </Button> */}
      <Button variant="ghost" asChild>
        <Link href="/membership">Start Now</Link>
      </Button>
    </div>
  );
}