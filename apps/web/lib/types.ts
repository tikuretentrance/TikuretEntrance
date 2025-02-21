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

export interface Book {
  id: string
  title: string
  description: string
  grade: string
  subject: string
  stream?: string
  type: "Textbook" | "Study Guide" | "Workbook"
  format: "PDF" | "Interactive"
  coverUrl: string
  downloadUrl: string
  chapters: string[]
  recentlyViewed: boolean
  favorite: boolean
  publisher: string
  publishYear: number
  language: string
  pages: number
  fileSize: string
  curriculum: string
  pdfUrl: string
}

export interface StudyPlanTopic {
  id: string
  title: string
  completed: boolean
  totalItems: number
  completedItems: number
}

export interface StudyPlan {
  id: string
  title: string
  subject: string
  progress: number
  totalHours: number
  completedHours: number
  topics: StudyPlanTopic[]
  nextSession?: {
    topic: string
    duration: number
    scheduledFor: string
  }
}