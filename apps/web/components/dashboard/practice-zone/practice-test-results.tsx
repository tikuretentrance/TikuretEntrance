"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Test } from "@/lib/types"
import { CheckCircle2, XCircle, Clock } from "lucide-react"
import Link from "next/link"

interface PracticeTestResultsProps {
    test: Test
}

interface TestResult {
    testId: string
    score: number
    totalQuestions: number
    timeSpent: number
    answers: Record<number, number>
    submittedAt: string
}

export function PracticeTestResults({ test }: PracticeTestResultsProps) {
    const [results, setResults] = useState<TestResult | null>(null)

    useEffect(() => {
        const storedResults = localStorage.getItem(`test_result_${test.id}`)
        if (storedResults) {
            setResults(JSON.parse(storedResults))
        }
    }, [test.id])

    if (!results) {
        return (
            <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                    You haven't completed this test yet or your results were not saved.
                </p>
                <Button asChild>
                    <Link href={`/dashboard/practice/${test.id}`}>Take Test</Link>
                </Button>
            </div>
        )
    }

    const scorePercentage = Math.round((results.score / results.totalQuestions) * 100)
    const timeSpentMinutes = Math.floor(results.timeSpent / 60)
    const timeSpentSeconds = results.timeSpent % 60

    const getScoreColor = (score: number) => {
        if (score >= 80) return "text-green-500"
        if (score >= 60) return "text-yellow-500"
        return "text-red-500"
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
                <div className="space-y-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Test Results</h1>
                        <p className="text-muted-foreground">{test.title}</p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className={`text-4xl font-bold ${getScoreColor(scorePercentage)}`}>
                            {scorePercentage}%
                        </div>
                        <div className="w-full max-w-md">
                            <Progress value={scorePercentage} className="h-3" />
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {results.score} correct out of {results.totalQuestions} questions
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                            <div className="flex justify-center text-green-500 mb-2">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div className="font-medium">{results.score}</div>
                            <div className="text-sm text-muted-foreground">Correct</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                            <div className="flex justify-center text-red-500 mb-2">
                                <XCircle className="h-5 w-5" />
                            </div>
                            <div className="font-medium">
                                {results.totalQuestions - results.score}
                            </div>
                            <div className="text-sm text-muted-foreground">Incorrect</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                            <div className="flex justify-center text-blue-500 mb-2">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div className="font-medium">
                                {timeSpentMinutes}:{timeSpentSeconds.toString().padStart(2, '0')}
                            </div>
                            <div className="text-sm text-muted-foreground">Time Spent</div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button asChild variant="outline" className="w-full">
                            <Link href={`/dashboard/practice/${test.id}`}>Retake Test</Link>
                        </Button>
                        <Button asChild className="w-full">
                            <Link href="/dashboard/practice">Back to Practice Tests</Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}