import { StudyNoteInterface } from "@/lib/types/study-note";

export const calculusNote: StudyNoteInterface = {
    id: "note1",
    title: "Calculus Fundamentals",
    subject: "Mathematics",
    topic: "Calculus",
    content: {
        sections: [
            {
                id: "s1",
                title: "Introduction to Limits",
                content: "The concept of limits is fundamental to calculus...",
                type: "text"
            },
            {
                id: "s2",
                title: "Definition of a Limit",
                content: "A limit describes the value that a function approaches...",
                type: "definition",
                important: true
            },
            {
                id: "s3",
                title: "Key Theorem",
                content: "The limit of a sum is the sum of the limits...",
                type: "quote",
                important: true
            },
            {
                id: "s4",
                title: "Chapter Summary",
                content: "Limits form the foundation for differentiation and integration...",
                type: "summary"
            }
        ]
    },
    lastUpdated: "2024-03-15"
}