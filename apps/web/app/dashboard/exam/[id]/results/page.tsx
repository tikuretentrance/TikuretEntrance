import { ExamResults } from "@/components/exams/exam-results"
import { exams } from "@/lib/exams-data"
import { notFound } from "next/navigation"

interface ResultsPageProps {
    params: {
        id: string
    }
}

export function generateStaticParams() {
    return exams.map((exam) => ({
        id: exam.id,
    }))
}

export default function ResultsPage({ params }: ResultsPageProps) {
    const exam = exams.find((e) => e.id === params.id)

    if (!exam) {
        notFound()
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <ExamResults exam={exam} />
        </div>
    )
}