import chemistryQuestions from "./data/practice-questions/chemistry/chemistry-25";
import chemistryG12Questions from "./data/practice-questions/chemistry/chemistry-u1-and-2";
import economicsUnit1Questions from "./data/practice-questions/economics/grade12-unit-1";
import economicsUnit2Questions from "./data/practice-questions/economics/grade12-unit-2";
import { historyQuestionsUnit1, historyQuestionsUnit2 } from "./data/practice-questions/history-g11";
import { physicsUnit1Questions, physicsUnit2Questions } from "./data/practice-questions/physics/physics-g11";
import { PracticeSet } from "./types/practice";

export const practiceData: PracticeSet[] = [
  {
    id: "economics-u1",
    title: "Economics G-12 Unit 1",
    subject: "Economics",
    topic: "Fundamental Concepts of Macroeconomics",
    difficulty: "medium",
    questionCount: 20,
    timeLimit: 30,
    questions: economicsUnit1Questions,
    attempts: 0,
    averageScore: 0,
  },
  {
    id: "economics-u2",
    title: "Economics G-12 Unit 2",
    subject: "Economics",
    topic: "Aggregate Demand and Aggregate Supply Analysis",
    difficulty: "medium",
    questionCount: 20,
    timeLimit: 30,
    questions: economicsUnit2Questions,
    attempts: 0,
    averageScore: 0,
  },
  {
    id: "chemistry-entrance-1",
    title: "Chemistry Entrance Exam Practice",
    subject: "Chemistry",
    topic: "General Chemistry",
    difficulty: "medium",
    questionCount: 30,
    timeLimit: 40,
    questions: chemistryQuestions,
    attempts: 850,
    averageScore: 68,
  },
  {
    id: "chemistry-u1-and-2",
    title: "Chemistry G-12 Unit 1 and 2",
    subject: "Chemistry",
    topic: "General Chemistry",
    difficulty: "medium",
    questionCount: 10,
    timeLimit: 15,
    questions: chemistryG12Questions,
    attempts: 850,
    averageScore: 68,
  },
  {
    id: "history-g11-u1",
    title: "History G11 Unit 1",
    subject: "History",
    topic: "Historiography & Human Evolution",
    difficulty: "medium",
    questionCount: 20,
    timeLimit: 30, // Time limit in minutes
    questions: historyQuestionsUnit1,
    attempts: 0,
    averageScore: 0,
  },
  {
    id: "history-g11-u2",
    title: "History G11 Unit 2",
    subject: "History",
    topic: "Major Spots of Ancient World Civilizations",
    difficulty: "medium",
    questionCount: 30,
    timeLimit: 45,
    questions: historyQuestionsUnit2,
    attempts: 0,
    averageScore: 0,
  },
  {
    id: "physics-g11-u1",
    title: "Physics G11 Unit 1",
    subject: "Physics",
    topic: "Physics and Human Society",
    difficulty: "medium",
    questionCount: 5,
    timeLimit: 30,
    questions: physicsUnit1Questions,
    attempts: 0,
    averageScore: 0,
  },
  {
    id: "physics-g11-u2",
    title: "Physics G11 Unit 2",
    subject: "Physics",
    topic: "Vectors",
    difficulty: "medium",
    questionCount: 10,
    timeLimit: 45,
    questions: physicsUnit2Questions,
    attempts: 0,
    averageScore: 0,
  }

];
