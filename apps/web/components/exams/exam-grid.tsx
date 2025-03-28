"use client"

import { useSearchParams } from "next/navigation"
import { ExamCard } from "./exam-card"
import { exams } from "@/lib/exams-data"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Exam } from "@/lib/types/exam"

export default function ExamGrid() {
  const searchParams = useSearchParams()
  const stream = searchParams.get("stream")
  const subject = searchParams.get("subject")
  const year = searchParams.get("year")
  const search = searchParams.get("search")?.toLowerCase()

  const [loading, setLoading] = useState(true)
  const [filteredExams, setFilteredExams] = useState<Exam[]>([])
  const [cachedResults, setCachedResults] = useState<Record<string, Exam[]>>({})

  useEffect(() => {
    // Create a cache key based on the current filters
    const cacheKey = `${stream || 'all'}-${subject || 'all'}-${year || 'all'}-${search || ''}`

    // Check if we have cached results for this filter combination
    if (cachedResults[cacheKey]) {
      setFilteredExams(cachedResults[cacheKey])
      setLoading(false)
      return
    }

    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const filtered = exams.filter(exam => {
        if (stream && stream !== "all" && exam.stream.toLowerCase() !== stream) {
          return false
        }

        if (subject && subject !== "all" && exam.subject.toLowerCase() !== subject) {
          return false
        }

        if (year && year !== "all" && exam.year.toString() !== year) {
          return false
        }

        if (search) {
          const searchableText = `${exam.subject} ${exam.year} ${exam.description}`.toLowerCase()
          if (!searchableText.includes(search)) {
            return false
          }
        }

        return true
      })

      // Cache the results
      setCachedResults(prev => ({
        ...prev,
        [cacheKey]: filtered
      }))

      setFilteredExams(filtered)
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [stream, subject, year, search])

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="space-y-2 py-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="h-10 w-full mt-2" />
          </div>
        ))}
      </div>
    )
  }

  if (filteredExams.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No exams found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or search to find more exams
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredExams.map((exam) => (
        <ExamCard key={exam.id} exam={exam} />
      ))}
    </div>
  )
}