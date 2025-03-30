import { StudyNote } from "./types/study-note";

export const mockStudyNotes: StudyNote[] = [
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
