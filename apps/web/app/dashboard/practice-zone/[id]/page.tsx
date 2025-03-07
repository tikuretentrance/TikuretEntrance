import { tests } from "@/lib/tests-data"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { PracticeTestInterface } from "@/components/dashboard/practice-zone/practice-test-interface"

interface PracticeTestPageProps {
    params: {
        id: string
    }
}

export function generateStaticParams() {
    return tests.map((test) => ({
        id: test.id,
    }))
}

export function generateMetadata({ params }: PracticeTestPageProps): Metadata {
    const test = tests.find((t) => t.id === params.id)

    if (!test) {
        return {
            title: 'Test Not Found',
        }
    }

    return {
        title: `${test.title} - Practice Test`,
        description: `Practice test for ${test.subject}`,
    }
}

export default function PracticeTestPage({ params }: PracticeTestPageProps) {
    const test = tests.find((t) => t.id === params.id)

    if (!test) {
        notFound()
    }

    return (
        <div className="container px-4 py-8">
            <PracticeTestInterface test={test} />
        </div>
    )
}