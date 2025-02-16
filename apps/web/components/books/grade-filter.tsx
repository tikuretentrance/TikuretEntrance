"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter, useSearchParams } from "next/navigation"

const grades = [
    { id: "all", label: "All Grades" },
    { id: "grade-9", label: "Grade 9" },
    { id: "grade-10", label: "Grade 10" },
    { id: "grade-11", label: "Grade 11" },
    { id: "grade-12", label: "Grade 12" }
]

export function GradeFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentGrade = searchParams.get("grade") || "all"

    const handleGradeChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value === "all") {
            params.delete("grade")
        } else {
            params.set("grade", value)
        }
        router.push(`/books?${params.toString()}`)
    }

    return (
        <div className="space-y-4">
            <h3 className="font-medium">Grade Level</h3>
            <RadioGroup
                defaultValue={currentGrade}
                onValueChange={handleGradeChange}
                className="space-y-2"
            >
                {grades.map((grade) => (
                    <div key={grade.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={grade.id} id={grade.id} />
                        <Label htmlFor={grade.id}>{grade.label}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}