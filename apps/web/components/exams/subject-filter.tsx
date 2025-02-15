"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const naturalSubjects = [
    "Biology",
    "Mathematics",
    "Physics",
    "Chemistry",
    "SAT",
    "English"
]

const socialSubjects = [
    "Geography",
    "History",
    "Mathematics",
    "Economics",
    "SAT",
    "English"
]

export default function SubjectFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentStream = searchParams.get("stream") || "all"
    const currentSubject = searchParams.get("subject") || "all"

    const subjects = currentStream === "natural"
        ? naturalSubjects
        : currentStream === "social"
            ? socialSubjects
            : Array.from(new Set([...naturalSubjects, ...socialSubjects]))

    const handleSubjectChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value === "all") {
            params.delete("subject")
        } else {
            params.set("subject", value.toLowerCase())
        }
        router.push(`/exams?${params.toString()}`)
    }

    return (
        <div className="space-y-4">
            <h3 className="font-medium">Subject</h3>
            <RadioGroup
                defaultValue={currentSubject}
                onValueChange={handleSubjectChange}
                className="space-y-3"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all-subjects" />
                    <Label htmlFor="all-subjects">All Subjects</Label>
                </div>
                {subjects.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                        <RadioGroupItem
                            value={subject.toLowerCase()}
                            id={subject}
                        />
                        <Label htmlFor={subject}>{subject}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}