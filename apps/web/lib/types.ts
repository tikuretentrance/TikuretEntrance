export interface Course {
  id: string
  title: string
  description: string
  grade: string
  subject: string
  duration: string
  lessons: number
  students: number
  prerequisites?: {
    courses: string[]
    skills: string[]
  }
  modules: CourseModule[]
}

export interface CourseModule {
  id: number
  title: string
  progress: number
  topics: CourseTopic[]
}

export interface CourseTopic {
  id: number
  title: string
  duration: string
  completed: boolean
  description?: string
}

export interface Test {
  id: string
  title: string
  subject: string
  difficulty: string
  duration: number
  questions: number
  averageScore: number
  attempts: number
}

export interface Exam {
  id: string
  subject: string
  stream: string
  year: number
  description: string
  duration: number
  questions: number
  attempts: number
  averageScore: number
}