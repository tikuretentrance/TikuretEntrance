"use client"

import { useState, useMemo, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Timer, AlertCircle, CheckCircle, XCircle, Lock, Image as ImageIcon, BookOpen, Lightbulb } from "lucide-react"
import { Exam, ExamQuestion } from "@/lib/types"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useExamSecurity } from "@/lib/hooks/useExamSecurity"
import { ExplanationSection } from "./explanation"
import { useExamTimer } from "@/lib/hooks/useExamTimer"
import { toast } from "sonner"


interface ExamInterfaceProps {
    exam: Exam
}

export function ExamInterface({ exam }: ExamInterfaceProps) {
    const router = useRouter()
    const [started, setStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, boolean>>({})
    const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({})
    const [examLocked, setExamLocked] = useState(false)
    const [showTerminationModal, setShowTerminationModal] = useState(false)
    const [terminationReason, setTerminationReason] = useState("")

    const questions = useMemo(() => exam.questionData || generateMockQuestions(exam.questions), [exam])
    const progress = useMemo(() => (currentQuestion / questions.length) * 100, [currentQuestion, questions])

    // Call useExamTimer before handleSubmitExam
    const { timeLeft, startTimer, stopTimer } = useExamTimer(exam.duration, () => {
        handleSubmitExam()
    })

    const handleSubmitExam = useCallback(() => {
        setExamLocked(true)
        const score = Object.entries(answers).reduce((acc, [qId, answer]) => {
            const question = questions[parseInt(qId)]
            return acc + (answer === question.correctAnswer ? 1 : 0)
        }, 0)

        const results = {
            examId: exam.id,
            userId: "guest",
            score,
            totalQuestions: questions.length,
            timeSpent: exam.duration * 60 - timeLeft, // Now timeLeft is available
            answers,
            submittedAt: new Date().toISOString(),
            completed: true,
            attemptId: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        }

        localStorage.setItem(`exam_result_${exam.id}`, JSON.stringify(results))
        router.push(`/dashboard/exam/${exam.id}/results`)
    }, [answers, exam, questions, timeLeft, router])

    const terminateExam = useCallback((reason: string) => {
        stopTimer()
        setTerminationReason(reason)
        setShowTerminationModal(true)
        setExamLocked(true)
        toast.error(`Exam terminated: ${reason}`, { position: "top-center" })
    }, [stopTimer])

    useExamSecurity(started, examLocked, terminateExam)

    const handleStart = useCallback(() => {
        setStarted(true)
        startTimer()
    }, [startTimer])

    const handleAnswer = useCallback((questionId: number, answer: number) => {
        if (examLocked || submittedAnswers[questionId]) return
        setAnswers((prev) => ({ ...prev, [questionId]: answer }))
    }, [examLocked, submittedAnswers])

    const handleSubmitAnswer = useCallback(() => {
        const questionId = currentQuestion
        setSubmittedAnswers((prev) => ({ ...prev, [questionId]: true }))
        setShowExplanation((prev) => ({ ...prev, [questionId]: true }))
    }, [currentQuestion])

    const formatTime = useCallback((seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }, [])

    const getDifficultyColor = useCallback((difficulty?: string) => {
        switch (difficulty) {
            case "easy": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
            case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
            case "hard": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
            default: return "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
        }
    }, [])

    const isCurrentQuestionAnswered = answers[currentQuestion] !== undefined
    const isCurrentQuestionSubmitted = submittedAnswers[currentQuestion]
    const isExplanationVisible = showExplanation[currentQuestion] || false

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
                        <div>Total Questions: {questions.length}</div>
                    </div>
                    <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                            Make sure you have a stable internet connection and enough time to complete the exam.
                            Once started, you should not leave this page until you complete the exam.
                        </AlertDescription>
                    </Alert>
                    <Button onClick={handleStart} className="w-full">
                        Start Exam
                    </Button>
                </div>
            </Card>
        )
    }

    const currentQ = questions[currentQuestion]

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <Dialog open={showTerminationModal} onOpenChange={setShowTerminationModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-destructive flex items-center gap-2">
                            <Lock className="h-5 w-5" /> Exam Terminated
                        </DialogTitle>
                        <DialogDescription>
                            Your exam has been terminated due to: {terminationReason}.
                            You will need to retake the exam.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end">
                        <Button onClick={() => router.push("/exams")}>
                            Return to Exams
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

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
                    {examLocked && (
                        <div className="flex items-center justify-center gap-2 p-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 rounded-md mb-4">
                            <Lock className="h-4 w-4" />
                            <span>Exam is locked. Reviewing answers only.</span>
                        </div>
                    )}

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-medium">{currentQ.text}</h2>
                            {currentQ.difficulty && (
                                <Badge className={getDifficultyColor(currentQ.difficulty)}>
                                    {currentQ.difficulty.charAt(0).toUpperCase() + currentQ.difficulty.slice(1)}
                                </Badge>
                            )}
                        </div>
                        {currentQ.topic && (
                            <div className="text-sm text-muted-foreground">
                                Topic: {currentQ.topic}
                            </div>
                        )}
                    </div>

                    {currentQ.imageUrl && (
                        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border">
                            <Image
                                src={currentQ.imageUrl}
                                alt={currentQ.imageAlt || "Question illustration"}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    <div className="space-y-3">
                        {currentQ.options.map((option, index) => (
                            <button
                                key={index}
                                className={`w-full p-4 text-left rounded-lg border transition-colors flex items-center
                                    ${answers[currentQuestion] === index ? "border-primary bg-primary/5" : "hover:bg-muted"}
                                    ${isCurrentQuestionSubmitted ? "cursor-not-allowed" : ""}
                                `}
                                onClick={() => handleAnswer(currentQuestion, index)}
                                disabled={isCurrentQuestionSubmitted || examLocked}
                            >
                                <div className="mr-3 flex-shrink-0">
                                    {isExplanationVisible ? (
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
                                </div>
                                <span>{option}</span>
                            </button>
                        ))}
                    </div>

                    {/* {isExplanationVisible && (
                        <ExplanationSection explanation={currentQ.explanation} isVisible={true} />
                    )} */}
                    {isExplanationVisible && (
                        <div className="mt-4 p-6 bg-primary/5 rounded-lg border border-primary/20 shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                                <Lightbulb className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold text-lg">Explanation</h3>
                            </div>
                            <div className="prose dark:prose-invert max-w-none">
                                <p>{currentQ.explanation}</p>
                            </div>
                            {currentQ.topic && (
                                <div className="mt-4 pt-4 border-t border-primary/10">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <BookOpen className="h-4 w-4" />
                                        <span>Related topic: <span className="font-medium">{currentQ.topic}</span></span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex justify-between pt-4">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentQuestion(prev => prev - 1)}
                            disabled={currentQuestion === 0 || examLocked}
                        >
                            Previous
                        </Button>

                        {isCurrentQuestionAnswered && !isCurrentQuestionSubmitted ? (
                            <Button onClick={handleSubmitAnswer} disabled={examLocked}>
                                Submit Answer
                            </Button>
                        ) : (
                            currentQuestion === questions.length - 1 ? (
                                <Button onClick={handleSubmitExam} disabled={examLocked || !isCurrentQuestionSubmitted}>
                                    Finish Exam
                                </Button>
                            ) : (
                                <Button onClick={() => setCurrentQuestion(prev => prev + 1)} disabled={!isCurrentQuestionSubmitted || examLocked}>
                                    Next
                                </Button>
                            )
                        )}
                    </div>
                </div>
            </Card>
        </div>
    )
}

function generateMockQuestions(count: number): ExamQuestion[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        text: `Sample question ${i + 1}`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: Math.floor(Math.random() * 4),
        explanation: "This is a sample explanation for this question."
    }))
}