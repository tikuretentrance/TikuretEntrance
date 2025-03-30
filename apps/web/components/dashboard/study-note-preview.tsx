"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Star, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { StudyNote } from "@/lib/types/study-note";
import { mockStudyNotes } from "@/lib/study-notes";

export function StudyNotesPreview() {
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState<StudyNote[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNotes(mockStudyNotes);
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Study Notes & Guides</CardTitle>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                ) : (
                    <div className="space-y-4">
                        {notes.map((note) => (
                            <div
                                key={note.id}
                                className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                            >
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4 text-primary" />
                                        <span className="font-medium">{note.title}</span>
                                        {note.isFavorite && (
                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                        )}
                                        {note.isNew && <Badge variant="secondary">New</Badge>}
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <span className="mr-4">{note.subject}</span>
                                        <Clock className="h-3 w-3 mr-1" />
                                        <span>Updated {formatDate(note.lastUpdated)}</span>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" className="gap-1" asChild>
                                    <Link href={`/dashboard/study-notes/${note.id}`}>
                                        View
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Button className="w-full" asChild>
                    <Link href="/dashboard/study-notes">View All Study Notes</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}