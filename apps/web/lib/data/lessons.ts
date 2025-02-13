import { Lesson } from "../types/lesson"

export const lessons: Lesson[] = [
  {
    id: 1,
    moduleId: 1,
    title: "Introduction to Limits",
    content: `
      <h2>Understanding Limits</h2>
      <p>In calculus, a limit describes the behavior of a function as its input approaches a particular value.</p>
      
      <h3>Key Concepts</h3>
      <ul>
        <li>Definition of a limit</li>
        <li>One-sided limits</li>
        <li>Infinite limits</li>
      </ul>
      
      <h3>Example</h3>
      <p>Consider the function f(x) = (x² - 1)/(x - 1)</p>
    `,
    type: "text",
    duration: "45 mins",
    nextLessonId: 2,
    quiz: {
      id: 1,
      questions: [
        {
          id: 1,
          text: "What is the limit of (x² - 1)/(x - 1) as x approaches 1?",
          options: ["0", "1", "2", "Undefined"],
          correctAnswer: 2,
          explanation: "As x approaches 1, the function approaches 2"
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 2,
    moduleId: 1,
    title: "Evaluating Limits",
    content: `
      <h2>Methods for Finding Limits</h2>
      <p>Learn different techniques to evaluate limits...</p>
    `,
    type: "exercise",
    duration: "60 mins",
    previousLessonId: 1,
    nextLessonId: 3,
    exercise: {
      id: 1,
      instructions: "Practice evaluating limits using these methods",
      tasks: [
        {
          id: 1,
          description: "Find the limit of (x³ - 1)/(x - 1) as x approaches 1",
          hints: [
            "Try factoring the numerator",
            "Look for a common factor"
          ]
        }
      ]
    }
  }
]