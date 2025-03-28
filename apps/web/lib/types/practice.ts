export interface PracticeSet {
    id: string;
    title: string;
    subject: string;
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
    questionCount: number;
    timeLimit: number;
    questions: PracticeQuestion[];
    attempts?: number;
    averageScore: number;
}

export interface PracticeQuestion {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    topic: string;
    subtopic?: string;
    difficulty: 'easy' | 'medium' | 'hard';
    imageUrl?: string;
    imageAlt?: string;
}


export interface PracticeTestResult {
    testId: string
    score: number
    totalQuestions: number
    timeSpent: number
    answers: Record<number, number>
    submittedAt: string
}

export interface PracticeAttempt {
    id: string;
    setId: string;
    userId: string;
    startTime: string;
    endTime?: string;
    score?: number;
    answers: Record<string, number>;
    completed: boolean;
}