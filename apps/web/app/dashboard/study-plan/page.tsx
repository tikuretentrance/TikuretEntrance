"use client";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { ProgressOverview } from "@/components/dashboard/progress-overview";
import { StudyGoals } from "@/components/dashboard/study-goal";
import { UpcomingTests } from "@/components/dashboard/upcoming-tests";
import { useUser } from "@clerk/nextjs";

export default function StudyPlanPage() {
    const { user } = useUser()
    return (
        <div className="container mx-auto py-8">
            <div className="grid gap-8 md:grid-cols-[240px_1fr] px-4">
                <DashboardSidebar />
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2 text-gradient">Study Plan</h1>
                            <p className="text-muted-foreground">
                                Track and manage your study progress
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                        <StudyGoals userId={user?.id || ''} />
                        <UpcomingTests />
                    </div>
                    <ProgressOverview userId={user?.id || ''} />
                </div>
            </div>
        </div>
    );
}