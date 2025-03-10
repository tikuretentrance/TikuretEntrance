'use client';

import ExamGrid from "@/components/exams/exam-grid"
import ExamStats from "@/components/exams/exam-stats"
import { Suspense } from "react"
import { ExamSearch } from "@/components/exams/exam-search"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function ExamPage() {
  return (
    <div className="container py-8 mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <DashboardSidebar />
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gradient">Previous Year Exams</h1>
            <p className="text-muted-foreground">
              Practice with actual entrance exams from previous years
            </p>
          </div>

          <Suspense fallback={<div>Loading ...</div>}>
            {/* <ExamStats /> */}
            <ExamSearch />
            <ExamGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}