export interface StudyPlanTopic {
    id: string
    title: string
    completed: boolean
    totalItems: number
    completedItems: number
}

export interface StudyPlan {
    id: string
    title: string
    subject: string
    progress: number
    totalHours: number
    completedHours: number
    topics: StudyPlanTopic[]
    nextSession?: {
        topic: string
        duration: number
        scheduledFor: string
    }
}