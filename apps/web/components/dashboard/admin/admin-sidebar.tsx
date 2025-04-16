'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileText,
  Settings,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const sidebarItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Content",
    href: "/admin/#",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/admin/#",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <nav className="space-y-1">
        {sidebarItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === item.href
                ? "bg-secondary/50 hover:bg-secondary/70"
                : "hover:bg-muted"
            )}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        ))}
        <Card className="p-6 bg-gradient-to-br from-primary/50 to-secondary/50">
          <CardHeader className="p-4">
            <CardTitle className="text-sm font-medium">ESSLCE 2025</CardTitle>
            <CardDescription>June 22, 2025</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center justify-between text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">
                {Math.max(
                  Math.ceil(
                    (new Date("2025-06-22T00:00:00Z").getTime() -
                      new Date().setUTCHours(0, 0, 0, 0)) /
                    (1000 * 3600 * 24)
                  ),
                  0
                )} days remaining
              </span>
            </div>
          </CardContent>
        </Card>
      </nav>
      {/* Exam Countdown */}
    </div>
  );
}