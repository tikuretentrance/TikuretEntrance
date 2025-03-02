// components/ExplanationSection.tsx
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExplanationSectionProps {
    explanation: string
    isVisible?: boolean // Make it optional
}

export function ExplanationSection({ explanation, isVisible: initialVisible = false }: ExplanationSectionProps) {
    const [isExpanded, setIsExpanded] = useState(initialVisible)

    return (
        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
            <button
                className="w-full flex items-center justify-between font-medium"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span>Explanation</span>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {isExpanded && (
                <p className="mt-2 text-sm text-muted-foreground">
                    {explanation}
                </p>
            )}
        </div>
    )
}