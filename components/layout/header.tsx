"use client";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserNav } from "./user-nav";
import { ThemeToggle } from "../theme/theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Practice Tests", href: "/practice" },
  { name: "Study Plans", href: "/study-plans" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold text-lg">TikuretEntrance</span>
          </Link>
        </div>
        <nav className="hidden md:flex flex-grow justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${pathname === item.href
                ? "text-foreground"
                : "text-foreground/60"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="h-6 w-px bg-border" />
          <UserNav />
        </div>
      </div>
    </header>
  );
}