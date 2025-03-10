import { z } from "zod";

export const studySessionSchema = z.object({
    id: z.string(),
    userId: z.string(),
    subject: z.string(),
    topic: z.string(),
    startTime: z.string(),
    endTime: z.string().optional(),
    duration: z.number(), // in minutes
    completed: z.boolean(),
    progress: z.number(), // percentage
});

export const studyGoalSchema = z.object({
    id: z.string(),
    userId: z.string(),
    subject: z.string(),
    targetHours: z.number(),
    completedHours: z.number(),
    deadline: z.string(),
    type: z.enum(["daily", "weekly", "monthly"]),
    progress: z.number(), // percentage
});

export const userProgressSchema = z.object({
    userId: z.string(),
    totalStudyHours: z.number(),
    testsCompleted: z.number(),
    averageScore: z.number(),
    subjectProgress: z.record(z.string(), z.number()), // subject -> progress percentage
    weeklyActivity: z.array(z.object({
        date: z.string(),
        hours: z.number(),
    })),
    recentActivity: z.array(z.object({
        id: z.string(),
        type: z.enum(["study", "test", "achievement"]),
        title: z.string(),
        timestamp: z.string(),
    })),
});

export type StudySession = z.infer<typeof studySessionSchema>;
export type StudyGoal = z.infer<typeof studyGoalSchema>;
export type UserProgress = z.infer<typeof userProgressSchema>;