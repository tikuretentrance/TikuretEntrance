"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useCache } from "@/lib/hooks/use-cache";

interface Question {
    id: string;
    subject: string;
    topic: string;
    difficulty: "easy" | "medium" | "hard";
    text: string;
    bookmarked?: boolean;
}

interface QuestionListProps {
    searchQuery: string;
    subject: string;
    difficulty: string;
}

// Mock data - replace with API call in production
const mockQuestions: Question[] = [
    {
        id: "q1",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "hard",
        text: "Find the derivative of f(x) = x³ + 2x² - 4x + 1",
    },
    {
        id: "q2",
        subject: "Physics",
        topic: "Mechanics",
        difficulty: "medium",
        text: "A car accelerates uniformly from rest to 20 m/s in 5 seconds. Calculate its acceleration.",
    },
    // Add more mock questions...
];

export function QuestionList({ searchQuery, subject, difficulty }: QuestionListProps) {
    const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

    const { data: questions, loading } = useCache<Question[]>(
        () => Promise.resolve(mockQuestions),
        { key: "questions", ttl: 3600000 }
    );

    const toggleBookmark = (questionId: string) => {
        setBookmarks(prev => {
            const next = new Set(prev);
            if (next.has(questionId)) {
                next.delete(questionId);
            } else {
                next.add(questionId);
            }
            return next;
        });
    };

    const filteredQuestions = questions?.filter(q => {
        if (subject !== "all" && q.subject.toLowerCase() !== subject) return false;
        if (difficulty !== "all" && q.difficulty !== difficulty) return false;
        if (searchQuery) {
            const searchText = `${q.subject} ${q.topic} ${q.text}`.toLowerCase();
            if (!searchText.includes(searchQuery.toLowerCase())) return false;
        }
        return true;
    });

    if (loading) {
        return (
            <div className="space-y-4">
                {Array(5).fill(0).map((_, i) => (
                    <Card key={i} className="p-6">
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                            <Skeleton className="h-4 w-full" />
                            <div className="flex justify-between">
                                <Skeleton className="h-8 w-24" />
                                <Skeleton className="h-8 w-8" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }

    if (!filteredQuestions?.length) {
        return (
            <Card className="p-6 text-center">
                <p className="text-muted-foreground">No questions found matching your criteria.</p>
            </Card>
        );
    }

    return (
        <div className="space-y-4">
            {filteredQuestions.map((question) => (
                <Card key={question.id} className="p-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Badge>{question.subject}</Badge>
                                <Badge variant="outline">{question.topic}</Badge>
                                <Badge
                                    className={
                                        question.difficulty === "easy"
                                            ? "bg-green-100 text-green-800"
                                            : question.difficulty === "medium"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-red-100 text-red-800"
                                    }
                                >
                                    {question.difficulty}
                                </Badge>
                            </div>
                        </div>

                        <p className="text-lg">{question.text}</p>

                        <div className="flex items-center justify-between">
                            <Button variant="outline">View Details</Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => toggleBookmark(question.id)}
                            >
                                {bookmarks.has(question.id) ? (
                                    <BookmarkCheck className="h-5 w-5 text-primary" />
                                ) : (
                                    <Bookmark className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}