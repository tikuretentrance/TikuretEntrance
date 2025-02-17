"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Exam } from "@/lib/types"
import { BarChart } from "lucide-react"
import Link from "next/link"

interface ExamResultsProps {
    exam: Exam
}

export function ExamResults({ exam }: ExamResultsProps) {
    // Mock results - replace with real data
    const results = {
        score: 75,
        totalQuestions: exam.questions,
        timeSpent: 95,
        correctAnswers: 45,
        incorrectAnswers: 15,
        skipped: 5,
        topicPerformance: [
            { topic: "Algebra", score: 85 },
            { topic: "Calculus", score: 70 },
            { topic: "Geometry", score: 65 }
        ]
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
                <div className="space-y-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Exam Results</h1>
                        <p className="text-muted-foreground">{exam.subject} - {exam.year}</p>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <div className="text-4xl font-bold text-primary">{results.score}%</div>
                        <Progress value={results.score} className="w-1/3" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                            <div className="font-medium">{results.correctAnswers}</div>
                            <div className="text-sm text-muted-foreground">Correct</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                            <div className="font-medium">{results.incorrectAnswers}</div>
                            <div className="text-sm text-muted-foreground">Incorrect</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                            <div className="font-medium">{results.skipped}</div>
                            <div className="text-sm text-muted-foreground">Skipped</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-medium flex items-center gap-2">
                            <BarChart className="h-4 w-4" />
                            Topic Performance
                        </h2>
                        <div className="space-y-3">
                            {results.topicPerformance.map((topic) => (
                                <div key={topic.topic} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>{topic.topic}</span>
                                        <span>{topic.score}%</span>
                                    </div>
                                    <Progress value={topic.score} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button asChild variant="outline" className="w-full">
                            <Link href={`/exams/${exam.id}`}>Retake Exam</Link>
                        </Button>
                        <Button asChild className="w-full">
                            <Link href="/exams">Back to Exams</Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}