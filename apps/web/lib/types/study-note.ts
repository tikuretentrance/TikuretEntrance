export interface StudyNoteInterface {
    id: string
    title: string
    subject: string
    topic: string
    content: {
        sections: {
            id: string
            title: string
            content: string
            type: "text" | "definition" | "quote" | "summary"
            important?: boolean
        }[]
    }
    lastUpdated: string
}

export interface StudyNoteListDashboard {
    id: string;
    title: string;
    subject: string;
    lastUpdated: string;
    isFavorite: boolean;
    isNew: boolean;
}

export interface StudyNoteListInterface {
    id: string
    title: string
    subject: string
    topic: string
    summary: string
    lastUpdated: string
    bookmarked?: boolean
}