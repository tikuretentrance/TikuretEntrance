"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter, useSearchParams } from "next/navigation"

const years = ["2024", "2023", "2022", "2021", "2020", "2019"]

export default function YearFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentYear = searchParams.get("year") || "all"

    const handleYearChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value === "all") {
            params.delete("year")
        } else {
            params.set("year", value)
        }
        router.push(`/exams?${params.toString()}`)
    }

    return (
        <div className="space-y-4">
            <h3 className="font-medium">Year</h3>
            <RadioGroup
                defaultValue={currentYear}
                onValueChange={handleYearChange}
                className="space-y-3"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all-years" />
                    <Label htmlFor="all-years">All Years</Label>
                </div>
                {years.map((year) => (
                    <div key={year} className="flex items-center space-x-2">
                        <RadioGroupItem value={year} id={year} />
                        <Label htmlFor={year}>{year}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}