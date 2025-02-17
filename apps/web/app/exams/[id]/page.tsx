import { exams } from "@/lib/exams-data"
import { notFound } from "next/navigation"
import { ExamInterface } from "@/components/exams/exam-interface"
import { Metadata } from "next"

interface ExamPageProps {
    params: {
        id: string
    }
}

export function generateStaticParams() {
    return exams.map((exam) => ({
        id: exam.id,
    }))
}

export function generateMetadata({ params }: ExamPageProps): Metadata {
    const exam = exams.find((e) => e.id === params.id)

    if (!exam) {
        return {
            title: 'Exam Not Found',
        }
    }

    return {
        title: `${exam.subject} ${exam.year} - Entrance Exam`,
        description: exam.description,
    }
}

export default function ExamPage({ params }: ExamPageProps) {
    const exam = exams.find((e) => e.id === params.id)

    if (!exam) {
        notFound()
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <ExamInterface exam={exam} />
        </div>
    )
}