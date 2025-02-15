"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter, useSearchParams } from "next/navigation"

const streams = [
    { id: "all", label: "All Streams" },
    { id: "natural", label: "Natural Science" },
    { id: "social", label: "Social Science" }
]

export default function StreamFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentStream = searchParams.get("stream") || "all"

    const handleStreamChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value === "all") {
            params.delete("stream")
        } else {
            params.set("stream", value)
        }
        router.push(`/exams?${params.toString()}`)
    }

    return (
        <div className="space-y-4">
            <h3 className="font-medium">Stream</h3>
            <RadioGroup
                defaultValue={currentStream}
                onValueChange={handleStreamChange}
                className="space-y-3"
            >
                {streams.map((stream) => (
                    <div key={stream.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={stream.id} id={stream.id} />
                        <Label htmlFor={stream.id}>{stream.label}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}