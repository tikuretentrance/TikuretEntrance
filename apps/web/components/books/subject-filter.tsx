"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const subjects = [
    { id: "all", label: "All Subjects" },
    { id: "mathematics", label: "Mathematics" },
    { id: "physics", label: "Physics" },
    { id: "chemistry", label: "Chemistry" },
    { id: "biology", label: "Biology" },
    { id: "english", label: "English" },
    { id: "history", label: "History" },
    { id: "geography", label: "Geography" }
]

export function SubjectFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentSubject = searchParams.get("subject") || "all"

    const handleSubjectChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value === "all") {
            params.delete("subject")
        } else {
            params.set("subject", value)
        }
        router.push(`/books?${params.toString()}`)
    }

    return (
        <div className="space-y-4">
            <h3 className="font-medium">Subject</h3>
            <RadioGroup
                defaultValue={currentSubject}
                onValueChange={handleSubjectChange}
                className="space-y-2"
            >
                {subjects.map((subject) => (
                    <div key={subject.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={subject.id} id={subject.id} />
                        <Label htmlFor={subject.id}>{subject.label}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}