"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useDebounce } from "@/lib/hooks/use-debounce"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const streams = [
    { value: "all", label: "All Streams" },
    { value: "natural", label: "Natural Science" },
    { value: "social", label: "Social Science" }
]

const subjects = {
    natural: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
    social: ["Geography", "History", "Mathematics", "Economics", "English"],
    all: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Economics", "English", "SAT"]
}

const years = ["2024", "2023", "2022", "2021", "2020", "2019"]

export function ExamSearch() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [value, setValue] = useState(searchParams.get("search") || "")
    const [stream, setStream] = useState(searchParams.get("stream") || "all")
    const [subject, setSubject] = useState(searchParams.get("subject") || "all")
    const [year, setYear] = useState(searchParams.get("year") || "all")

    const debouncedValue = useDebounce(value, 500)

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())

        // Update search param
        if (debouncedValue) {
            params.set("search", debouncedValue)
        } else {
            params.delete("search")
        }

        // Update stream param
        if (stream === "all") {
            params.delete("stream")
        } else {
            params.set("stream", stream)
        }

        // Update subject param
        if (subject === "all") {
            params.delete("subject")
        } else {
            params.set("subject", subject.toLowerCase())
        }

        // Update year param
        if (year === "all") {
            params.delete("year")
        } else {
            params.set("year", year)
        }

        router.push(`/dashboard/exam?${params.toString()}`)
    }, [debouncedValue, stream, subject, year, router, searchParams])

    // Get available subjects based on selected stream
    const availableSubjects = subjects[stream as keyof typeof subjects]

    return (
        <div className="grid gap-4 md:grid-cols-[1fr_200px_200px_200px]">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder="Search exams by subject, year, or description..."
                    className="pl-9"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            <Select value={stream} onValueChange={setStream}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Stream" />
                </SelectTrigger>
                <SelectContent>
                    {streams.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                            {s.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    {availableSubjects.map((s) => (
                        <SelectItem key={s} value={s}>
                            {s}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select value={year} onValueChange={setYear}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map((y) => (
                        <SelectItem key={y} value={y}>
                            {y}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}