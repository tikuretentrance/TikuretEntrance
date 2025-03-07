"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Exam, ExamQuestion, ExamResult } from "@/lib/types"
import { BarChart, CheckCircle2, XCircle, Clock, Award, BookOpen, BarChart2 } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ExamResultsProps {
    exam: Exam
}

interface TopicPerformance {
    topic: string
    correct: number
    total: number
    score: number
}

export function ExamResults({ exam }: ExamResultsProps) {
    const [results, setResults] = useState<ExamResult | null>(null)
    const [topicPerformance, setTopicPerformance] = useState<TopicPerformance[]>([])
    const [difficultyPerformance, setDifficultyPerformance] = useState<Record<string, { correct: number, total: number, score: number }>>({})

    useEffect(() => {
        // Retrieve results from localStorage
        // In a real app with backend, this would be an API call
        const storedResults = localStorage.getItem(`exam_result_${exam.id}`)
        if (storedResults) {
            const parsedResults = JSON.parse(storedResults)
            setResults(parsedResults)

            // Calculate topic performance if questions have topics
            if (exam.questionData) {
                const topicMap = new Map<string, { correct: number, total: number }>()
                const difficultyMap = new Map<string, { correct: number, total: number }>()

                exam.questionData.forEach((question, index) => {
                    // Process topic performance
                    if (question.topic) {
                        if (!topicMap.has(question.topic)) {
                            topicMap.set(question.topic, { correct: 0, total: 0 })
                        }

                        const topicData = topicMap.get(question.topic)!
                        topicData.total += 1

                        if (parsedResults.answers[index] === question.correctAnswer) {
                            topicData.correct += 1
                        }
                    }

                    // Process difficulty performance
                    if (question.difficulty) {
                        if (!difficultyMap.has(question.difficulty)) {
                            difficultyMap.set(question.difficulty, { correct: 0, total: 0 })
                        }

                        const diffData = difficultyMap.get(question.difficulty)!
                        diffData.total += 1

                        if (parsedResults.answers[index] === question.correctAnswer) {
                            diffData.correct += 1
                        }
                    }
                })

                // Convert topic map to array with scores
                const topicPerf = Array.from(topicMap.entries()).map(([topic, data]) => ({
                    topic,
                    correct: data.correct,
                    total: data.total,
                    score: Math.round((data.correct / data.total) * 100)
                }))

                // Convert difficulty map to object with scores
                const diffPerf: Record<string, { correct: number, total: number, score: number }> = {}
                difficultyMap.forEach((data, difficulty) => {
                    diffPerf[difficulty] = {
                        ...data,
                        score: Math.round((data.correct / data.total) * 100)
                    }
                })

                setTopicPerformance(topicPerf)
                setDifficultyPerformance(diffPerf)
            }
        }
    }, [exam.id, exam.questionData])

    if (!results) {
        return (
            <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                    You haven't completed this exam yet or your results were not saved.
                </p>
                <Button asChild>
                    <Link href={`/dashboard/exam/${exam.id}`}>Take Exam</Link>
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
                        <h1 className="text-2xl font-bold mb-2">Exam Results</h1>
                        <p className="text-muted-foreground">{exam.subject} - {exam.year}</p>
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
                            <div className="font-medium">{results.totalQuestions - results.score}</div>
                            <div className="text-sm text-muted-foreground">Incorrect</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                            <div className="flex justify-center text-blue-500 mb-2">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div className="font-medium">{timeSpentMinutes}:{timeSpentSeconds.toString().padStart(2, '0')}</div>
                            <div className="text-sm text-muted-foreground">Time Spent</div>
                        </div>
                    </div>

                    <Tabs defaultValue="topics" className="w-full">
                        <TabsList className="grid grid-cols-3 mb-4">
                            <TabsTrigger value="topics" className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                Topics
                            </TabsTrigger>
                            <TabsTrigger value="difficulty" className="flex items-center gap-2">
                                <Award className="h-4 w-4" />
                                Difficulty
                            </TabsTrigger>
                            <TabsTrigger value="comparison" className="flex items-center gap-2">
                                <BarChart2 className="h-4 w-4" />
                                Comparison
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="topics" className="space-y-4">
                            <h2 className="font-medium flex items-center gap-2">
                                <BarChart className="h-4 w-4" />
                                Topic Performance
                            </h2>
                            {topicPerformance.length > 0 ? (
                                <div className="space-y-3">
                                    {topicPerformance.map((topic) => (
                                        <div key={topic.topic} className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>{topic.topic}</span>
                                                <span className={getScoreColor(topic.score)}>
                                                    {topic.correct}/{topic.total} ({topic.score}%)
                                                </span>
                                            </div>
                                            <Progress value={topic.score} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted-foreground">
                                    No topic data available for this exam.
                                </p>
                            )}
                        </TabsContent>

                        <TabsContent value="difficulty" className="space-y-4">
                            <h2 className="font-medium flex items-center gap-2">
                                <Award className="h-4 w-4" />
                                Performance by Difficulty
                            </h2>
                            {Object.keys(difficultyPerformance).length > 0 ? (
                                <div className="space-y-4">
                                    {['easy', 'medium', 'hard'].map(diff => {
                                        if (!difficultyPerformance[diff]) return null;
                                        const data = difficultyPerformance[diff];
                                        return (
                                            <div key={diff} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <Badge className={`
                            ${diff === 'easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' : ''}
                            ${diff === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' : ''}
                            ${diff === 'hard' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' : ''}
                          `}>
                                                        {diff.charAt(0).toUpperCase() + diff.slice(1)}
                                                    </Badge>
                                                    <span className={getScoreColor(data.score)}>
                                                        {data.correct}/{data.total} ({data.score}%)
                                                    </span>
                                                </div>
                                                <Progress value={data.score} />
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p className="text-muted-foreground">
                                    No difficulty data available for this exam.
                                </p>
                            )}
                        </TabsContent>

                        <TabsContent value="comparison" className="space-y-4">
                            <h2 className="font-medium flex items-center gap-2">
                                <BarChart2 className="h-4 w-4" />
                                Your Performance vs. Average
                            </h2>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Your Score</span>
                                        <span className={getScoreColor(scorePercentage)}>{scorePercentage}%</span>
                                    </div>
                                    <Progress value={scorePercentage} />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Average Score</span>
                                        <span>{exam.averageScore}%</span>
                                    </div>
                                    <Progress value={exam.averageScore} />
                                </div>
                                <div className="p-4 rounded-lg bg-muted/30">
                                    <p className="text-sm">
                                        {scorePercentage > exam.averageScore
                                            ? `Congratulations! You scored ${scorePercentage - exam.averageScore}% higher than the average.`
                                            : scorePercentage < exam.averageScore
                                                ? `You scored ${exam.averageScore - scorePercentage}% below the average. Keep practicing!`
                                                : `You scored exactly the average for this exam.`
                                        }
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    <div className="flex gap-4">
                        <Button asChild variant="outline" className="w-full">
                            <Link href={`/exams/${exam.id}`}>Retake Exam</Link>
                        </Button>
                        <Button asChild className="w-full">
                            <Link href="/dashboard/exam">Back to Exams</Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}