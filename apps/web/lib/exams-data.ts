import physics2011Questions from "./data/exams/physics/2011";
import { biologyQuestions } from "./data/exams/sample-exams/bio";
import { mathQuestions } from "./data/exams/sample-exams/math";
import { physicsQuestions } from "./data/exams/sample-exams/physics";
import { Exam } from "./types"

export const exams: Exam[] = [
  {
    id: "natural-physics-2011/2019",
    subject: "Physics",
    stream: "natural",
    year: 2011,
    description: "Grade 12 Natural Science Physics Entrance Exam 2011 E.C",
    duration: 180,
    questions: 50,
    attempts: 980,
    // averageScore: 68,
    questionData: physics2011Questions
  },
  {
    id: "natural-math-2024",
    subject: "Mathematics",
    stream: "natural",
    year: 2024,
    description: "Grade 12 Natural Science Mathematics Entrance Exam",
    duration: 15,
    questions: 65,
    attempts: 1250,
    // averageScore: 72,
    questionData: mathQuestions
  },
  {
    id: "natural-physics-2024",
    subject: "Physics",
    stream: "natural",
    year: 2024,
    description: "Grade 12 Natural Science Physics Entrance Exam",
    duration: 20,
    questions: 50,
    attempts: 980,
    // averageScore: 68,
    questionData: physicsQuestions
  },
  {
    id: "natural-biology-2010",
    subject: "Biology",
    stream: "natural",
    year: 2010,
    description: "Grade 12 Natural Science Biology Entrance Exam (2010 E.C)",
    duration: 15,
    questions: 100,
    attempts: 1500,
    // averageScore: 65,
    questionData: biologyQuestions,
  },
  {
    id: "social-history-2024",
    subject: "History - Coming Soon",
    stream: "social",
    year: 2024,
    description: "Grade 12 Social Science History Entrance Exam",
    duration: 20,
    questions: 40,
    attempts: 800,
    // averageScore: 78,
    // questionData: historyQuestions
  },
  {
    id: "social-economics-2024",
    subject: "Economics - Coming Soon",
    stream: "social",
    year: 2024,
    description: "Grade 12 Social Science History Entrance Exam",
    duration: 20,
    questions: 40,
    attempts: 800,
    // averageScore: 78,
    // questionData: historyQuestions
  },
]