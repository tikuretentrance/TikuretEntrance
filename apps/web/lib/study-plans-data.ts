import { StudyPlan } from "./types";

export const studyPlans: StudyPlan[] = [
  {
    id: "math-prep-12",
    title: "Mathematics Grade 12 Prep",
    subject: "Mathematics",
    progress: 65,
    totalHours: 40,
    completedHours: 26,
    topics: [
      {
        id: "algebra-2",
        title: "Advanced Algebra",
        completed: true,
        totalItems: 10,
        completedItems: 10
      },
      {
        id: "calculus-1",
        title: "Differential Calculus",
        completed: false,
        totalItems: 8,
        completedItems: 6
      }
    ],
    nextSession: {
      topic: "Integration Techniques",
      duration: 2,
      scheduledFor: "2024-03-25T14:00:00Z"
    }
  },
  {
    id: "physics-prep-12",
    title: "Physics Grade 12 Prep",
    subject: "Physics",
    progress: 45,
    totalHours: 35,
    completedHours: 16,
    topics: [
      {
        id: "mechanics",
        title: "Classical Mechanics",
        completed: true,
        totalItems: 12,
        completedItems: 12
      },
      {
        id: "thermo",
        title: "Thermodynamics",
        completed: false,
        totalItems: 10,
        completedItems: 4
      }
    ],
    nextSession: {
      topic: "Electromagnetism",
      duration: 1.5,
      scheduledFor: "2024-03-26T10:00:00Z"
    }
  }
];