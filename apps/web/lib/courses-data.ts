import { Course } from "./types/course"

export const courses: Course[] = [
  {
    id: "math-g12-1",
    title: "Advanced Mathematics",
    description: "Comprehensive preparation for the mathematics section of the university entrance exam",
    grade: "Grade 12",
    subject: "Mathematics",
    duration: "12 weeks",
    lessons: 24,
    students: 0,
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
      },
      {
        id: 2,
        title: "Integration Methods",
        progress: 43,
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
  {
    id: "math-g12-2",
    title: "Advanced Algebra",
    description: "Comprehensive preparation for the mathematics section of the university entrance exam",
    grade: "Grade 12",
    subject: "Mathematics",
    duration: "12 weeks",
    lessons: 24,
    students: 0,
    prerequisites: {
      courses: ["Basic Algebra", "Intermediate Algebra"],
      skills: ["Understanding of algebraic expressions", "Solving linear equations"]
    },
    modules: [
      {
        id: 1,
        title: "Polynomials and Factoring",
        progress: 50,
        topics: [
          {
            id: 1,
            title: "Introduction to Polynomials",
            duration: "45 mins",
            completed: true,
            description: "Understanding the properties of polynomials"
          },
          {
            id: 2,
            title: "Factoring Techniques",
            duration: "1 hour",
            completed: true,
            description: "Learn various methods of factoring polynomials"
          }
        ]
      },
      {
        id: 2,
        title: "Quadratic Equations",
        progress: 20,
        topics: [
          {
            id: 3,
            title: "Solving Quadratic Equations",
            duration: "1 hour",
            completed: true,
            description: "Methods to solve quadratic equations"
          },
          {
            id: 4,
            title: "Quadratic Formula",
            duration: "1 hour",
            completed: false,
            description: "Understanding the quadratic formula"
          }
        ]
      }
    ]
  },
  {
    id: "science-g10-1",
    title: "Biology Fundamentals",
    description: "Comprehensive preparation for the biology section of the university entrance exam",
    grade: "Grade 10",
    subject: "Science",
    duration: "8 weeks",
    lessons: 16,
    students: 0,
    prerequisites: {
      courses: ["Basic Biology", "Cell Biology"],
      skills: ["Understanding of biological concepts", "Knowledge of cell structure"]
    },
    modules: [
      {
        id: 1,
        title: "Genetics",
        progress: 40,
        topics: [
          {
            id: 1,
            title: "Mendelian Genetics",
            duration: "1 hour",
            completed: true,
            description: "Understanding the basic principles of Mendelian genetics"
          },
          {
            id: 2,
            title: "Genetic Mutations",
            duration: "1 hour",
            completed: false,
            description: "The concept of genetic mutations and their effects"
          }
        ]
      },
      {
        id: 2,
        title: "Evolution",
        progress: 10,
        topics: [
          {
            id: 3,
            title: "Natural Selection",
            duration: "1 hour",
            completed: true,
            description: "The theory of natural selection and its implications"
          },
          {
            id: 4,
            title: "Speciation",
            duration: "1 hour",
            completed: false,
            description: "The process of speciation and its causes"
          }
        ]
      }
    ]
  },
  {
    id: "science-g10-2",
    title: "Chemistry Basics",
    description: "Comprehensive preparation for the chemistry section of the university entrance exam",
    grade: "Grade 10",
    subject: "Science",
    duration: "8 weeks",
    lessons: 16,
    students: 0,
    prerequisites: {
      courses: ["Basic Chemistry", "Atomic Structure"],
      skills: ["Understanding of chemical reactions", "Knowledge of atomic structure"]
    },
    modules: [
      {
        id: 1,
        title: "Chemical Reactions",
        progress: 60,
        topics: [
          {
            id: 1,
            title: "Types of Reactions",
            duration: "1 hour",
            completed: true,
            description: "Understanding the different types of chemical reactions"
            },
          {
            id: 2,
            title: "Balancing Equations",
            duration: "1 hour",
            completed: true,
            description: "Methods to balance chemical equations"
          }
          ]
      },
      {
        id: 2,
        title: "Periodic Table",
        progress: 30,
        topics: [
          {
            id: 3,
            title: "Periodic Trends",
            duration: "1 hour",
            completed: true,
            description: "Understanding the trends in the periodic table"
          },
          {
            id: 4,
            title: "Chemical Bonding",
            duration: "1 hour",
            completed: false,
            description: "The concept of chemical bonding"
          }
        ]
      }
      ]
  }
]