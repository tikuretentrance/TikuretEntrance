
export interface Exam {
    id: string
    subject: string
    stream: string
    year: number
    description: string
    duration: number
    questions: number
    attempts?: number
    averageScore?: number
    questionData?: ExamQuestion[]
}

export interface ExamQuestion {
    id: number
    text: string
    options: string[]
    correctAnswer: number
    explanation: string
    topic?: string
    difficulty?: 'easy' | 'medium' | 'hard'
    imageUrl?: string
    imageAlt?: string
}

// Define a more structured result type for future backend integration
export interface ExamResult {
    examId: string
    userId: string
    score: number
    totalQuestions: number
    timeSpent: number
    answers: Record<number, number>
    submittedAt: string
    completed: boolean
    attemptId: string
}