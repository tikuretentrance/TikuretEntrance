import biologyQuestions2017 from "./data/practice-questions/biology";
import chemistryQuestions from "./data/practice-questions/chemistry";
import { PracticeSet } from "./types/practice";

export const practiceData: PracticeSet[] = [
  {
    id: "chemistry-entrance-1",
    title: "Chemistry Entrance Exam Practice",
    subject: "Chemistry",
    topic: "General Chemistry",
    difficulty: "medium",
    questionCount: 30,
    timeLimit: 120, // Time limit in minutes
    questions: chemistryQuestions,
    attempts: 850,
    averageScore: 68,
  },
  {
    id: "biology-micro-organisms-1",
    title: "Biology: Micro-organisms",
    subject: "Physics",
    topic: "Mechanics",
    difficulty: "hard",
    questionCount: 50,
    timeLimit: 180,
    questions: biologyQuestions2017,
    attempts: 980,
    averageScore: 68,
  },
];