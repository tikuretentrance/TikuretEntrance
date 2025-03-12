"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    BookOpen,
    Search,
    Printer,
    Download,
    Bookmark,
    ArrowLeft,
    ChevronDown,
    ChevronUp,
} from "lucide-react"
import Link from "next/link"

interface StudyNote {
    id: string
    title: string
    subject: string
    topic: string
    content: {
        sections: {
            id: string
            title: string
            content: string
            type: "text" | "definition" | "quote" | "summary"
            important?: boolean
        }[]
    }
    lastUpdated: string
}

// Mock data - replace with API call
const mockNote: StudyNote = {
    id: "note1",
    title: "Calculus Fundamentals",
    subject: "Mathematics",
    topic: "Calculus",
    content: {
        sections: [
            {
                id: "s1",
                title: "Introduction to Limits",
                content: "The concept of limits is fundamental to calculus...",
                type: "text"
            },
            {
                id: "s2",
                title: "Definition of a Limit",
                content: "A limit describes the value that a function approaches...",
                type: "definition",
                important: true
            },
            {
                id: "s3",
                title: "Key Theorem",
                content: "The limit of a sum is the sum of the limits...",
                type: "quote",
                important: true
            },
            {
                id: "s4",
                title: "Chapter Summary",
                content: "Limits form the foundation for differentiation and integration...",
                type: "summary"
            }
        ]
    },
    lastUpdated: "2024-03-15"
}

export default function StudyNotePage() {
    const [note, setNote] = useState<StudyNote | null>(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
    const [readProgress, setReadProgress] = useState(0)
    const [bookmarked, setBookmarked] = useState(false)

    useEffect(() => {
        // Simulate API fetch
        setNote(mockNote)
        // Initialize all sections as expanded
        if (mockNote.content.sections) {
            setExpandedSections(new Set(mockNote.content.sections.map(s => s.id)))
        }
    }, [])

    useEffect(() => {
        // Update read progress based on expanded sections
        if (note) {
            const progress = (expandedSections.size / note.content.sections.length) * 100
            setReadProgress(progress)
        }
    }, [expandedSections, note])

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev => {
            const next = new Set(prev)
            if (next.has(sectionId)) {
                next.delete(sectionId)
            } else {
                next.add(sectionId)
            }
            return next
        })
    }

    const handlePrint = () => {
        window.print()
    }

    const handleDownload = () => {
        if (!note) return
        const content = JSON.stringify(note, null, 2)
        const blob = new Blob([content], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `${note.title.toLowerCase().replace(/\s+/g, "-")}.json`
        a.click()
        URL.revokeObjectURL(url)
    }

    if (!note) {
        return (
            <div className="container px-4 py-8">
                <div className="flex justify-center items-center min-h-[60vh]">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-2">Loading...</h2>
                        <p className="text-muted-foreground">Please wait while we load your study notes.</p>
                    </div>
                </div>
            </div>
        )
    }

    const filteredSections = note.content.sections.filter(section => {
        if (!searchQuery) return true
        const searchText = `${section.title} ${section.content}`.toLowerCase()
        return searchText.includes(searchQuery.toLowerCase())
    })

    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Button variant="ghost" asChild>
                        <Link href="/dashboard/study-notes">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Notes
                        </Link>
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" onClick={handlePrint}>
                            <Printer className="mr-2 h-4 w-4" />
                            Print
                        </Button>
                        <Button variant="outline" onClick={handleDownload}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                        </Button>
                        <Button
                            variant={bookmarked ? "secondary" : "outline"}
                            onClick={() => setBookmarked(!bookmarked)}
                        >
                            <Bookmark className="mr-2 h-4 w-4" />
                            {bookmarked ? "Bookmarked" : "Bookmark"}
                        </Button>
                    </div>
                </div>

                {/* Title and Progress */}
                <div className="space-y-4">
                    <div>
                        <h1 className="text-3xl font-bold">{note.title}</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <Badge>{note.subject}</Badge>
                            <Badge variant="outline">{note.topic}</Badge>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Progress value={readProgress} className="flex-1" />
                        <span className="text-sm text-muted-foreground">
                            {Math.round(readProgress)}% read
                        </span>
                    </div>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search within notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                    />
                </div>

                {/* Table of Contents */}
                <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <nav className="space-y-2">
                        {note.content.sections.map((section) => (
                            <button
                                key={section.id}
                                className="flex items-center gap-2 w-full text-left p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                onClick={() => {
                                    const element = document.getElementById(section.id)
                                    element?.scrollIntoView({ behavior: "smooth" })
                                }}
                            >
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                <span>{section.title}</span>
                            </button>
                        ))}
                    </nav>
                </Card>

                {/* Content */}
                <div className="space-y-6">
                    {filteredSections.map((section) => (
                        <Card
                            key={section.id}
                            id={section.id}
                            className="p-6"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-xl font-semibold">{section.title}</h2>
                                        {section.important && (
                                            <Badge variant="secondary">Important</Badge>
                                        )}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => toggleSection(section.id)}
                                    >
                                        {expandedSections.has(section.id) ? (
                                            <ChevronUp className="h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>

                                {expandedSections.has(section.id) && (
                                    <div className={`prose dark:prose-invert max-w-none ${section.type === "definition"
                                            ? "bg-primary/5 p-4 rounded-lg border border-primary/10"
                                            : section.type === "quote"
                                                ? "border-l-4 border-primary pl-4 italic"
                                                : section.type === "summary"
                                                    ? "bg-muted p-4 rounded-lg"
                                                    : ""
                                        }`}>
                                        {section.content}
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}