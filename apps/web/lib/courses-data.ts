import { Course } from "./types"

export const courses: Course[] = [
  {
    id: "math-g12-1",
    title: "Advanced Mathematics",
    description: "Comprehensive preparation for the mathematics section of the university entrance exam",
    grade: "Grade 12",
    subject: "Mathematics",
    duration: "12 weeks",
    lessons: 24,
    students: 1250,
    prerequisites: {
      courses: ["Basic Calculus", "Advanced Algebra"],
      skills: ["Basic algebraic manipulation", "Understanding of functions"]
    },
    modules: [
      {
        id: 1,
        title: "Calculus Fundamentals",
        progress: 60,
        topics: [
          {
            id: 1,
            title: "Introduction to Limits",
            duration: "45 mins",
            completed: true,
            description: "Understanding the concept of limits and their applications"
          },
          {
            id: 2,
            title: "Differentiation Techniques",
            duration: "1 hour",
            completed: true,
            description: "Learn various methods of differentiation"
          },
          {
            id: 3,
            title: "Applications of Derivatives",
            duration: "1.5 hours",
            completed: false,
            description: "Real-world applications of derivatives"
          }
        ]
      },
      {
        id: 2,
        title: "Integration Methods",
        progress: 30,
        topics: [
          {
            id: 4,
            title: "Basic Integration",
            duration: "1 hour",
            completed: true,
            description: "Fundamental integration techniques"
          },
          {
            id: 5,
            title: "Integration by Parts",
            duration: "1 hour",
            completed: false,
            description: "Advanced integration methods"
          }
        ]
      }
    ]
  },

]