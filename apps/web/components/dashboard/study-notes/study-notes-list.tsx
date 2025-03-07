"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useCache } from "@/lib/hooks/use-cache";

interface StudyNote {
  id: string;
  title: string;
  subject: string;
  topic: string;
  summary: string;
  content: string;
  lastUpdated: string;
}

interface StudyNotesListProps {
  searchQuery: string;
}

// Mock data - replace with API call in production
const mockNotes: StudyNote[] = [
  {
    id: "note1",
    title: "Calculus Fundamentals",
    subject: "Mathematics",
    topic: "Calculus",
    summary: "A comprehensive guide to basic calculus concepts including limits, derivatives, and integrals.",
    content: "Full content ... coming soon",
    lastUpdated: "2024-03-15",
  },
  {
    id: "note2",
    title: "Physics Mechanics",
    subject: "Physics",
    topic: "Mechanics",
    summary: "Study guide covering Newton's laws, momentum, and energy conservation.",
    content: "Full content ... coming soon",
    lastUpdated: "2024-03-14",
  },
];

export function StudyNotesList({ searchQuery }: StudyNotesListProps) {
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());
  
  const { data: notes, loading } = useCache<StudyNote[]>(
    () => Promise.resolve(mockNotes),
    { key: "study_notes", ttl: 3600000 }
  );

  const toggleExpanded = (noteId: string) => {
    setExpandedNotes(prev => {
      const next = new Set(prev);
      if (next.has(noteId)) {
        next.delete(noteId);
      } else {
        next.add(noteId);
      }
      return next;
    });
  };

  const filteredNotes = notes?.filter(note => {
    if (searchQuery) {
      const searchText = `${note.title} ${note.subject} ${note.topic} ${note.summary}`.toLowerCase();
      return searchText.includes(searchQuery.toLowerCase());
    }
    return true;
  });

  if (loading) {
    return (
      <div className="space-y-4">
        {Array(3).fill(0).map((_, i) => (
          <Card key={i} className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-x-2">
                <Skeleton className="h-5 w-20 inline-block" />
                <Skeleton className="h-5 w-20 inline-block" />
              </div>
              <Skeleton className="h-20 w-full" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (!filteredNotes?.length) {
    return (
      <Card className="p-6 text-center">
        <p className="text-muted-foreground">No study notes found matching your search.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {filteredNotes.map((note) => (
        <Card key={note.id} className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">{note.title}</h3>
              </div>
              <div className="text-sm text-muted-foreground">
                Updated: {new Date(note.lastUpdated).toLocaleDateString()}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge>{note.subject}</Badge>
              <Badge variant="outline">{note.topic}</Badge>
            </div>

            <p className="text-muted-foreground">{note.summary}</p>

            {expandedNotes.has(note.id) && (
              <div className="mt-4 pt-4 border-t">
                <div className="prose dark:prose-invert max-w-none">
                  {note.content}
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={() => toggleExpanded(note.id)}
                className="flex items-center gap-2"
              >
                {expandedNotes.has(note.id) ? (
                  <>
                    Show Less
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
              <Button variant="outline">Download PDF</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}