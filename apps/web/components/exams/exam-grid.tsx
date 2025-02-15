"use client"

import { useSearchParams } from "next/navigation"
import { ExamCard } from "./exam-card"
import { exams } from "@/lib/exams-data"

export default function ExamGrid() {
    const searchParams = useSearchParams()
    const stream = searchParams.get("stream")
    const subject = searchParams.get("subject")
    const year = searchParams.get("year")

    const filteredExams = exams.filter(exam => {
        if (stream && stream !== "all" && exam.stream.toLowerCase() !== stream) {
            return false
        }

        if (subject && subject !== "all" && exam.subject.toLowerCase() !== subject) {
            return false
        }

        if (year && year !== "all" && exam.year.toString() !== year) {
            return false
        }

        return true
    })

    if (filteredExams.length === 0) {
        return (
            <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No exams found</h3>
                <p className="text-muted-foreground">
                    Try adjusting your filters to find more exams
                </p>
            </div>
        )
    }

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {filteredExams.map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
            ))}
        </div>
    )
}