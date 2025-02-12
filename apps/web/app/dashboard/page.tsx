import { DashboardStats } from "@/components/dashboard/stats"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { UpcomingTests } from "@/components/dashboard/upcoming-tests"
import { StudyProgress } from "@/components/dashboard/study-progress"

export default function DashboardPage() {
    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Track your progress and manage your exam preparation
                    </p>
                </div>

                <DashboardStats />

                <div className="grid gap-6 md:grid-cols-2">
                    <StudyProgress />
                    <UpcomingTests />
                </div>

                <RecentActivity />
            </div>
        </div>
    )
}