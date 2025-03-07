export interface Subject {
    id: string;
    name: string;
    topics: Topic[];
    progress: number;
}

export interface Topic {
    id: string;
    title: string;
    description: string;
    totalHours: number;
    completedHours: number;
    subtopics: Subtopic[];
    progress: number;
}

export interface Subtopic {
    id: string;
    title: string;
    completed: boolean;
    estimatedMinutes: number;
}

export interface StudyGoal {
    id: string;
    subjectId: string;
    targetHours: number;
    completedHours: number;
    deadline: string;
    type: 'daily' | 'weekly' | 'monthly';
}

export interface StudySession {
    id: string;
    subjectId: string;
    topicId: string;
    subtopicId?: string;
    startTime: string;
    duration: number; // in minutes
    completed: boolean;
    notes?: string;
}