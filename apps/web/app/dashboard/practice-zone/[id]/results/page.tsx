import { practiceData } from "@/lib/practice-data"
import { notFound } from "next/navigation"
import { PracticeTestResults } from "@/components/dashboard/practice-zone/practice-test-results"

interface ResultsPageProps {
    params: {
        id: string
    }
}

export function generateStaticParams() {
    return practiceData.map((practice) => ({
        id: practice.id,
    }))
}
export default function ResultsPage({ params }: ResultsPageProps) {
    const test = practiceData.find((t) => t.id === params.id)

    if (!test) {
        notFound()
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <PracticeTestResults test={test} />
        </div>
    )
}