'use client'
import { DashboardStats } from "@/components/dashboard/stats"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { UpcomingTests } from "@/components/dashboard/upcoming-tests"
import { StudyProgress } from "@/components/dashboard/study-progress"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { QuestionBankPreview } from "@/components/dashboard/question-bank-review"
import { AIChatbot } from "@/components/dashboard/ai-chatbot"
import { NewContentNotifications } from "@/components/dashboard/new-content-notification"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { ProgressOverview } from "@/components/dashboard/progress-overview"
import { StudyGoals } from "@/components/dashboard/study-goal"
import { DashboardNotesPreview } from "@/components/dashboard/study-notes/dashboard-note-preview"

export default function DashboardPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in'); // Redirect to sign-in if not authenticated
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return null; // Show a loading state or nothing while checking
  }
  const userId = "user-1";

  return (
    <div className="container py-8 mx-auto">
      <div className="grid gap-6 md:grid-cols-[240px_1fr] px-4">
        <DashboardSidebar />

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gradient">Overview</h1>
            <p className="text-muted-foreground">
              Track your progress and manage your exam preparation
            </p>
          </div>
          <DashboardStats />

          {/* <ProgressOverview userId={userId} />
          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <StudyGoals userId={userId} />
            <UpcomingTests />
          </div> */}

          <NewContentNotifications />

          <div className="grid gap-6 md:grid-cols-2">
            <QuestionBankPreview />
            <DashboardNotesPreview />
          </div>

          {/* <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <StudyGoals userId={userId} />
            <UpcomingTests />
          </div>
          <ProgressOverview userId={userId} /> */}

          <RecentActivity userId={userId} />

          <div className="fixed bottom-6 right-6 z-50">
            <AIChatbot />
          </div>
        </div>
      </div>
    </div>
  )
}