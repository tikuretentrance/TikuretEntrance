import ExamGrid from "@/components/exams/exam-grid"
import YearFilter from "@/components/exams/year-filter"
import SubjectFilter from "@/components/exams/subject-filter"
import StreamFilter from "@/components/exams/stream-filter"
import ExamStats from "@/components/exams/exam-stats"
import { Suspense } from "react"

export default function ExamsPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Previous Year Exams</h1>
          <p className="text-muted-foreground">
            Practice with actual entrance exams from previous years
          </p>
        </div>

        <Suspense fallback={<div>Loading Exam Stats...</div>}>
          <div className="grid gap-6 md:grid-cols-[240px_1fr]">
            <aside className="space-y-6">
              <ExamStats />
              <StreamFilter />
              <SubjectFilter />
              <YearFilter />
            </aside>

            <main>
              <ExamGrid />
            </main>
          </div>
        </Suspense>
      </div>
    </div>
  )
}