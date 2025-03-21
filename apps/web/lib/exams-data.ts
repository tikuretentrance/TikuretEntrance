import physics2011Questions from "./data/exams/physics/2011";
import { physicsQuestions2016 } from "./data/exams/2016/physics";
import { mathQuestions } from "./data/exams/sample-exams/math";
import { physicsQuestions } from "./data/exams/sample-exams/physics";
import { Exam } from "./types"
import mathQuestions2016 from "./data/exams/2016/math";
import aptitudeQuestions2016 from "./data/exams/2016/sat";
import chemistryQuestions2016 from "./data/exams/2016/chemistry";
import biologyQuestions2016 from "./data/exams/2016/biology";
import historyQuestions2016 from "./data/exams/2016/history";
import economicsQuestions2016 from "./data/exams/2016/economics";

export const exams: Exam[] = [
  {
    id: "natural-physics-2024",
    subject: "Physics",
    stream: "natural",
    year: 2024,
    description: "Grade 12 Natural Science Physics Entrance Exam 2016 E.C",
    duration: 180,
    questions: 60,
    // attempts: 980,
    // averageScore: 68,
    questionData: physicsQuestions2016
  },
  {
    id: "natural-math-2024",
    subject: "Mathematics",
    stream: "natural",
    year: 2024,
    description: "Grade 12 Natural Science Mathematics Entrance Exam 2016 E.C",
    duration: 180,
    questions: 50,
    // attempts: 980,
    // averageScore: 68,
    questionData: mathQuestions2016
  },
  // SAT
  // {
  //   id: "sat-2024",
  //   subject: "SAT",
  //   stream: "natural",
  //   year: 2024,
  //   description: "Grade 12 Scholastic Aptitude Test (SAT) Entrance Exam 2016",
  //   duration: 120,
  //   questions: 60,
  //   // attempts: 980,
  //   // averageScore: 68,
  //   questionData: aptitudeQuestions2016
  // },
  // Chemistry 2016
  {
    id: "natural-chemistry-2024",
    subject: "Chemistry",
    stream: "natural",
    year: 2024,
    description: "Grade 12 Natural Science Chemistry Entrance Exam 2016 E.C",
    duration: 150,
    questions: 80,
    // attempts: 980,
    // averageScore: 68,
    questionData: chemistryQuestions2016
  },
  // Biology
  {
    id: "natural-biology-2024",
    subject: "Biology",
    stream: "natural",
    year: 2024,
    description: "Grade 12 Natural Science Biology Entrance Exam 2016 E.C",
    duration: 150,
    questions: 100,
    // attempts: 980,
    // averageScore: 68,
    questionData: biologyQuestions2016
  },

  // {
  //   id: "sat-english-2024",
  //   subject: "SAT English",
  //   stream: "sat",
  //   year: 2024,
  //   description: "SAT English Entrance Exam",
  //   duration: 180,
  //   questions: 60,
  //   // attempts: 980,
  //   // averageScore: 68,
  //   questionData: mathQuestions
  // },
  // {
  //   id: "natural-physics-2011",
  //   subject: "Physics  - 2011",
  //   stream: "natural",
  //   year: 2011,
  //   description: "Grade 12 Natural Science Physics Entrance Exam 2011 E.C",
  //   duration: 180,
  //   questions: 50,
  //   // attempts: 980,
  //   // averageScore: 68,
  //   questionData: physics2011Questions
  // },
  // {
  //   id: "natural-math-2024",
  //   subject: "Mathematics  - 2016",
  //   stream: "natural",
  //   year: 2024,
  //   description: "Grade 12 Natural Science Mathematics Entrance Exam",
  //   duration: 15,
  //   questions: 65,
  //   // attempts: 1250,
  //   // averageScore: 72,
  //   questionData: mathQuestions
  // },
  // {
  //   id: "natural-physics-2024",
  //   subject: "Physics  - 2016",
  //   stream: "natural",
  //   year: 2024,
  //   description: "Grade 12 Natural Science Physics Entrance Exam",
  //   duration: 20,
  //   questions: 50,
  //   // attempts: 980,
  //   // averageScore: 68,
  //   questionData: physicsQuestions
  // },
  // {
  //   id: "natural-biology-2024",
  //   subject: "Biology  - 2016 - Coming Soon",
  //   stream: "natural",
  //   year: 2024,
  //   description: "Grade 12 Natural Science Biology Entrance Exam (2010 E.C)",
  //   duration: 15,
  //   questions: 100,
  //   // attempts: 1500,
  //   // averageScore: 65,
  //   // questionData: biologyQuestions,
  // },
  {
    id: "social-history-2024",
    subject: "History  - 2016",
    stream: "social",
    year: 2024,
    description: "Grade 12 Social Science History Entrance Exam",
    duration: 150,
    questions: 40,
    // attempts: 800,
    // averageScore: 78,
    questionData: historyQuestions2016
  },
  {
    id: "social-economics-2024",
    subject: "Economics  - 2016",
    stream: "social",
    year: 2024,
    description: "Grade 12 Social Science History Entrance Exam",
    duration: 150,
    questions: 40,
    // attempts: 800,
    // averageScore: 78,
    questionData: economicsQuestions2016
  },
]