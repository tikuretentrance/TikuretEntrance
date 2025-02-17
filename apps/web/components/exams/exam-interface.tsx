"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Timer, AlertCircle } from "lucide-react"
import { Exam } from "@/lib/types"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

interface ExamInterfaceProps {
    exam: Exam
}

export function ExamInterface({ exam }: ExamInterfaceProps) {
    const router = useRouter()
    const [started, setStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [timeLeft, setTimeLeft] = useState(exam.duration * 60) // Convert to seconds
    const [answers, setAnswers] = useState<Record<number, number>>({})

    // Mock questions - replace with real data
    const questions = Array.from({ length: exam.questions }, (_, i) => ({
        id: i + 1,
        text: `Sample question ${i + 1} for ${exam.subject}`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0
    }))

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
        // Calculate score
        // const score = Object.entries(answers).reduce((acc, [qId, answer]) => {
        //     const question = questions[parseInt(qId)]
        //     return acc + (answer === question.correctAnswer ? 1 : 0)
        // }, 0)

        // // Save results
        // const results = {
        //     examId: exam.id,
        //     score,
        //     totalQuestions: questions.length,
        //     timeSpent: exam.duration * 60 - timeLeft,
        //     answers
        // }

        // Navigate to results page
        router.push(`/exams/${exam.id}/results`)
    }

    if (!started) {
        return (
            <Card className="max-w-2xl mx-auto p-6">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{exam.subject} - {exam.year}</h1>
                        <p className="text-muted-foreground">{exam.description}</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Timer className="h-4 w-4" />
                            <span>Duration: {exam.duration} minutes</span>
                        </div>
                        <div>Total Questions: {exam.questions}</div>
                    </div>

                    <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                            Make sure you have a stable internet connection and enough time to complete the exam.
                        </AlertDescription>
                    </Alert>

                    <Button onClick={handleStart} className="w-full">
                        Start Exam
                    </Button>
                </div>
            </Card>
        )
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="sticky top-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 pb-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">
                        Question {currentQuestion + 1} of {questions.length}
                    </div>
                    <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4" />
                        <span>
                            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                        </span>
                    </div>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            <Card className="p-6">
                <div className="space-y-6">
                    <h2 className="text-lg font-medium">
                        {questions[currentQuestion].text}
                    </h2>

                    <div className="space-y-3">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={`w-full p-4 text-left rounded-lg border transition-colors
                  ${answers[currentQuestion] === index
                                        ? "border-primary bg-primary/5"
                                        : "hover:bg-muted"
                                    }`}
                                onClick={() => handleAnswer(currentQuestion, index)}
                            >
                                {option}
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
                            <Button onClick={handleSubmit}>
                                Submit Exam
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