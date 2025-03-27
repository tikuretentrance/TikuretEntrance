import { practiceData } from "@/lib/practice-data"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { PracticeTestInterface } from "@/components/dashboard/practice-zone/practice-test-interface"

interface PracticeTestPageProps {
    params: {
        id: string
    }
}

export function generateStaticParams() {
    return practiceData.map((practice) => ({
        id: practice.id,
    }))
}

export function generateMetadata({ params }: PracticeTestPageProps): Metadata {
    const practice = practiceData.find((t) => t.id === params.id)

    if (!practice) {
        return {
            title: 'Practice Test Not Found',
        }
    }

    return {
        title: `${practice.title} - Practice Test`,
        description: `Practice test for ${practice.subject}`,
    }
}

export default function PracticeTestPage({ params }: PracticeTestPageProps) {
    const practice = practiceData.find((t) => t.id === params.id)

    if (!practice) {
        notFound()
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <PracticeTestInterface practiceSet={practice} />
        </div>
    )
}