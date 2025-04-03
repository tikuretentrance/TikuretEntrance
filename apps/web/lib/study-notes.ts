import { StudyNoteListDashboard, StudyNoteListInterface } from "./types/study-note";

export const notesOnDashboardSection: StudyNoteListDashboard[] = [
    {
        id: "note-1",
        title: "Calculus Formula Sheet",
        subject: "Mathematics",
        lastUpdated: "2025-03-15",
        isFavorite: true,
        isNew: false,
    },
    {
        id: "",
        title: "Physics Key Concepts",
        subject: "Physics",
        lastUpdated: "2025-03-18",
        isFavorite: false,
        isNew: true,
    },
    {
        id: "",
        title: "Organic Chemistry Reactions",
        subject: "Chemistry",
        lastUpdated: "2025-03-10",
        isFavorite: true,
        isNew: false,
    },
];


export const noteListData: StudyNoteListInterface[] = [
    {
        id: "note1",
        title: "Calculus Fundamentals",
        subject: "Mathematics",
        topic: "Calculus",
        summary: "A comprehensive guide to basic calculus concepts including limits, derivatives, and integrals.",
        lastUpdated: "2024-03-15",
        bookmarked: true
    },
    {
        id: "note2",
        title: "Physics Mechanics",
        subject: "Physics",
        topic: "Mechanics",
        summary: "Study guide covering Newton's laws, momentum, and energy conservation.",
        lastUpdated: "2024-03-14",
        bookmarked: false
    },
    {
        id: "note3",
        title: "World War II",
        subject: "History",
        topic: "World History",
        summary: "Detailed notes on the causes, events, and consequences of World War II.",
        lastUpdated: "2024-03-12",
        bookmarked: false
    },
]
