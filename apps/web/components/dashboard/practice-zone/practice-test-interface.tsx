"use client"

import { useCallback, useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Timer, AlertCircle, CheckCircle, XCircle, BookOpen } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"
import { PracticeSet } from "@/lib/types/practice"

interface PracticeTestInterfaceProps {
    practiceSet: PracticeSet
}



export function PracticeTestInterface({ practiceSet }: PracticeTestInterfaceProps) {
    const router = useRouter()
    const [started, setStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [timeLeft, setTimeLeft] = useState(practiceSet.timeLimit * 60) // Convert to seconds
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [submitted, setSubmitted] = useState(false)

    const questions = useMemo(() => practiceSet.questions || [], [practiceSet])
    const progress = (currentQuestion / questions.length) * 100

    const handleStart = () => {
        setStarted(true)
        // Start timer
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    handleSubmit()
                    return 0
                }
                return prev - 1
            })
        }, 1000)
    }

    const handleAnswer = (questionId: number, answer: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }))
    }

    const handleSubmit = () => {
        setSubmitted(true)
        // Calculate score
        const score = Object.entries(answers).reduce((acc, [qId, answer]) => {
            const question = questions[parseInt(qId)]
            return acc + (answer === question.correctAnswer ? 1 : 0)
        }, 0)

        // Store results in localStorage for now
        localStorage.setItem(`test_result_${practiceSet.id}`, JSON.stringify({
            testId: practiceSet.id,
            score,
            totalQuestions: questions.length,
            timeSpent: practiceSet.timeLimit * 60 - timeLeft,
            answers,
            submittedAt: new Date().toISOString()
        }))

        router.push(`/dashboard/practice-zone/${practiceSet.id}/results`)
    }

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const getDifficultyColor = useCallback((difficulty?: string) => {
        switch (difficulty) {
            case "easy": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
            case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
            case "hard": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
            default: return "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
        }
    }, [])


    if (!started) {
        return (
            <Card className="max-w-2xl mx-auto p-6">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{practiceSet.title}</h1>
                        <p className="text-muted-foreground">{practiceSet.subject}</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Timer className="h-4 w-4" />
                            <span>Duration: {practiceSet.timeLimit} minutes</span>
                        </div>
                        <div>Total Questions: {practiceSet.questions.length}</div>
                    </div>

                    <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                            Make sure you have enough time to complete the test. Once started, you cannot pause or leave the test.
                        </AlertDescription>
                    </Alert>

                    <Button onClick={handleStart} className="w-full">
                        Start Practice Test
                    </Button>
                </div>
            </Card>
        )
    }

    const currentQ = questions[currentQuestion]

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="sticky top-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 pb-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">
                        Question {currentQuestion + 1} of {questions.length}
                    </div>
                    <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4" />
                        <span className={timeLeft < 300 ? "text-red-500 font-bold" : ""}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            <Card className="p-6">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-medium">{currentQ.text}</h2>
                            {currentQ.difficulty && (
                                <Badge className={getDifficultyColor(currentQ.difficulty)}>
                                    {currentQ.difficulty.charAt(0).toUpperCase() + currentQ.difficulty.slice(1)}
                                </Badge>
                            )}
                        </div>
                        {/* {currentQ.topic && (
                            <div className="mt-4 pt-4 border-t border-primary/10">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BookOpen className="h-4 w-4" />
                                    <span>Related topic: <span className="font-medium">{currentQ.topic}</span></span>
                                </div>
                            </div>
                        )} */}

                    </div>
                    <div className="space-y-3">
                        {currentQ.options.map((option, index) => (
                            <button
                                key={index}
                                className={`w-full p-4 text-left rounded-lg border transition-colors
                  ${answers[currentQuestion] === index
                                        ? "border-primary bg-primary/5"
                                        : "hover:bg-muted"
                                    }
                  ${submitted ? "cursor-not-allowed" : ""}
                `}
                                onClick={() => handleAnswer(currentQuestion, index)}
                                disabled={submitted}
                            >
                                <div className="flex items-center gap-3">
                                    {submitted ? (
                                        index === currentQ.correctAnswer ? (
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                        ) : (
                                            answers[currentQuestion] === index ? (
                                                <XCircle className="h-5 w-5 text-red-500" />
                                            ) : (
                                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                                            )
                                        )
                                    ) : (
                                        <div className={`h-5 w-5 rounded-full border-2 ${answers[currentQuestion] === index
                                            ? "border-primary bg-primary/30"
                                            : "border-muted-foreground/30"
                                            }`} />
                                    )}
                                    <span>{option}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-between pt-4">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentQuestion(prev => prev - 1)}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </Button>

                        {currentQuestion === questions.length - 1 ? (
                            <Button
                                onClick={handleSubmit}
                                disabled={Object.keys(answers).length !== questions.length}
                            >
                                Submit Test
                            </Button>
                        ) : (
                            <Button onClick={() => setCurrentQuestion(prev => prev + 1)}>
                                Next
                            </Button>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    )
}