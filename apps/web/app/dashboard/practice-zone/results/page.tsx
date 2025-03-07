import { tests } from "@/lib/tests-data"
import { notFound } from "next/navigation"
import { PracticeTestResults } from "@/components/dashboard/practice-zone/practice-test-results"

interface ResultsPageProps {
    params: {
        id: string
    }
}

export default function ResultsPage({ params }: ResultsPageProps) {
    const test = tests.find((t) => t.id === params.id)

    if (!test) {
        notFound()
    }

    return (
        <div className="container px-4 py-8">
            <PracticeTestResults test={test} />
        </div>
    )
}