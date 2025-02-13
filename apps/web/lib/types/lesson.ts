export interface Lesson {
  id: number
  moduleId: number
  title: string
  content: string
  type: 'text' | 'video' | 'quiz' | 'exercise'
  duration: string
  nextLessonId?: number
  previousLessonId?: number
  quiz?: Quiz
  exercise?: Exercise
}

export interface Quiz {
  id: number
  questions: QuizQuestion[]
  passingScore: number
}

export interface QuizQuestion {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Exercise {
  id: number
  instructions: string
  tasks: ExerciseTask[]
}

export interface ExerciseTask {
  id: number
  description: string
  solution?: string
  hints: string[]
}

export interface LessonProgress {
  lessonId: number
  completed: boolean
  quizScore?: number
  exerciseCompleted?: boolean
  lastAccessed: string
}