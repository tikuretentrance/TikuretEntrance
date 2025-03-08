'use client'
import { DashboardStats } from "@/components/dashboard/stats"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { UpcomingTests } from "@/components/dashboard/upcoming-tests"
import { StudyProgress } from "@/components/dashboard/study-progress"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { QuestionBankPreview } from "@/components/dashboard/question-bank-review"
import { StudyNotesPreview } from "@/components/dashboard/study-note-preview"
import { AIChatbot } from "@/components/dashboard/ai-chatbot"
import { NewContentNotifications } from "@/components/dashboard/new-content-notification"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

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
  return (
    <div className="container py-8 mx-auto">
      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <DashboardSidebar />

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gradient">Overview</h1>
            <p className="text-muted-foreground">
              Track your progress and manage your exam preparation
            </p>
          </div>

          <DashboardStats />

          <div className="grid gap-6 md:grid-cols-2">
            <StudyProgress />
            <UpcomingTests />
          </div>

          <NewContentNotifications />

          <div className="grid gap-6 md:grid-cols-2">
            <QuestionBankPreview />
            <StudyNotesPreview />
          </div>

          <RecentActivity />

          <div className="fixed bottom-6 right-6 z-50">
            <AIChatbot />
          </div>
        </div>
      </div>
    </div>
  )
}