import { notFound } from "next/navigation";
import StudyNoteClient from "@/components/dashboard/study-notes/study-notes-client";
import { Metadata } from "next";
import { calculusNote } from "@/lib/data/study-notes/calculus";
import { notes } from "@/lib/data/study-notes";

interface StudyNotePageProps {
    params: {
        id: string;
    };
}

// export function generateStaticParams() {
//     // Return an array of objects with the id of each note
//     return [
//         { id: calculusNote.id }, // Add more notes if you have them
//     ];
// }

export function generateStaticParams() {
    return notes.map(note => ({
        id: note.id,
    }));
}


export function generateMetadata({ params }: StudyNotePageProps): Metadata {
    const note = calculusNote.content.sections.find((s) => s.id === params.id);

    if (!note) {
        return {
            title: 'Note Not Found',
            description: 'The requested note could not be found.',
        };
    }

    return {
        title: `${note.title} - TikuretEntrance`,
        description: note.content,
    };
}

export default function StudyNotePage({ params }: StudyNotePageProps) {
    const note = calculusNote; // Assuming you want to use the entire note object

    if (!note) {
        notFound();
    }

    return (
        <div>
            <StudyNoteClient note={note} />
        </div>
    );
}