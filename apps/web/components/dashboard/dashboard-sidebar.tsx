"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    Calendar,
    MicroscopeIcon,
    AlarmPlus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
    {
        title: "Dashboard Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Study Plan",
        href: "/dashboard/study-plan",
        icon: Calendar,
    },
    {
        title: "EUEE Exam",
        href: "/dashboard/exam",
        icon: AlarmPlus,
    },
    {
        title: "Practice Zone",
        href: "/dashboard/practice-zone",
        icon: FileText,
    },
    {
        title: "Study Notes & Guides",
        href: "/dashboard/study-notes",
        icon: BookOpen,
    },
    // {
    //     title: "Progress Analytics",
    //     href: "/dashboard/analytics",
    //     icon: BarChart2,
    // },
    // {
    //     title: "Practice Zone",
    //     href: "/dashboard/practice-zone",
    //     icon: GraduationCap,
    // },
    {
        title: "Formula Hub",
        href: "/dashboard/formula-hub",
        icon: MicroscopeIcon,
    },
    // {
    //     title: "Settings",
    //     href: "/dashboard/settings",
    //     icon: Settings,
    // },
    // {
    //     title: "Help & Support",
    //     href: "/dashboard/support",
    //     icon: HelpCircle,
    // },
];

export function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <div className="sticky space-y-4 py-4 h-full bg-gray-100 rounded-md">
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
                <div className="space-y-1">
                    {sidebarItems.map((item) => (
                        <Button
                            key={item.href}
                            variant={pathname === item.href ? "secondary" : "ghost"}
                            className={cn(
                                "w-full justify-start",
                                pathname === item.href
                                    ? "bg-secondary text-secondary-foreground"
                                    : "hover:bg-primary hover:underline"
                            )}
                            asChild
                        >
                            <Link href={item.href}>
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.title}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}