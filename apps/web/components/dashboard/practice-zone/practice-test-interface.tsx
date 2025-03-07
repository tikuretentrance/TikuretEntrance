"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Timer, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { Test } from "@/lib/types"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

interface PracticeTestInterfaceProps {
    test: Test
}

// Mock questions for demonstration
const mockQuestions = [
    {
        id: 1,
        text: "What is the derivative of f(x) = x²?",
        options: ["x", "2x", "x³", "2"],
        correctAnswer: 1
    },
    {
        id: 2,
        text: "What is the value of sin(30°)?",
        options: ["1/2", "√3/2", "1", "0"],
        correctAnswer: 0
    },
    // Add more mock questions as needed
]

export function PracticeTestInterface({ test }: PracticeTestInterfaceProps) {
    const router = useRouter()
    const [started, setStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [timeLeft, setTimeLeft] = useState(test.duration * 60) // Convert to seconds
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [submitted, setSubmitted] = useState(false)

    const progress = (currentQuestion / mockQuestions.length) * 100

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
            const question = mockQuestions[parseInt(qId)]
            return acc + (answer === question.correctAnswer ? 1 : 0)
        }, 0)

        // Store results in localStorage for now
        localStorage.setItem(`test_result_${test.id}`, JSON.stringify({
            testId: test.id,
            score,
            totalQuestions: mockQuestions.length,
            timeSpent: test.duration * 60 - timeLeft,
            answers,
            submittedAt: new Date().toISOString()
        }))

        // Navigate to results page (to be implemented)
        router.push(`/dashboard/practice/${test.id}/results`)
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    if (!started) {
        return (
            <Card className="max-w-2xl mx-auto p-6">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{test.title}</h1>
                        <p className="text-muted-foreground">{test.subject}</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Timer className="h-4 w-4" />
                            <span>Duration: {test.duration} minutes</span>
                        </div>
                        <div>Total Questions: {test.questions}</div>
                    </div>

                    <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                            Make sure you have enough time to complete the test. Once started, you cannot pause or leave the test.
                        </AlertDescription>
                    </Alert>

                    <Button onClick={handleStart} className="w-full">
                        Start Test
                    </Button>
                </div>
            </Card>
        )
    }

    const currentQ = mockQuestions[currentQuestion]

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="sticky top-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 pb-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">
                        Question {currentQuestion + 1} of {mockQuestions.length}
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
                    <h2 className="text-lg font-medium">{currentQ.text}</h2>

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

                        {currentQuestion === mockQuestions.length - 1 ? (
                            <Button
                                onClick={handleSubmit}
                                disabled={Object.keys(answers).length !== mockQuestions.length}
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