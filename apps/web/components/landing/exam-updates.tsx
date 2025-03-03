"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, FileText, AlertCircle } from "lucide-react";
import Link from "next/link";

interface ExamUpdate {
    id: string;
    title: string;
    type: "new_questions" | "exam_paper" | "announcement";
    date: string;
    description: string;
    link?: string;
}

const mockUpdates: ExamUpdate[] = [
    {
        id: "update-1",
        title: "New Physics Practice Questions Added",
        type: "new_questions",
        date: "2025-03-15",
        description: "50 new physics questions covering mechanics and thermodynamics",
        link: "/exams?subject=physics"
    },
    {
        id: "update-2",
        title: "2024 Mathematics Entrance Exam Now Available",
        type: "exam_paper",
        date: "2025-03-10",
        description: "Complete exam paper with solutions and explanations",
        link: "/exams/natural-math-2024"
    },
    {
        id: "update-3",
        title: "Important: Exam Date Announcement",
        type: "announcement",
        date: "2025-03-05",
        description: "The 2025 entrance exams will be held from July 5-10. Prepare accordingly."
    }
];

export function ExamUpdates() {
    const [updates, setUpdates] = useState<ExamUpdate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch with a delay
        const timer = setTimeout(() => {
            setUpdates(mockUpdates);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const getUpdateIcon = (type: ExamUpdate["type"]) => {
        switch (type) {
            case "new_questions":
                return <FileText className="h-5 w-5" />;
            case "exam_paper":
                return <FileText className="h-5 w-5" />;
            case "announcement":
                return <AlertCircle className="h-5 w-5" />;
        }
    };

    const getUpdateBadge = (type: ExamUpdate["type"]) => {
        switch (type) {
            case "new_questions":
                return <Badge variant="secondary">New Questions</Badge>;
            case "exam_paper":
                return <Badge variant="default">Exam Paper</Badge>;
            case "announcement":
                return <Badge variant="destructive">Announcement</Badge>;
        }
    };

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {loading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                        <Card key={i} className="overflow-hidden">
                            <CardHeader className="pb-0">
                                <Skeleton className="h-6 w-24 mb-2" />
                                <Skeleton className="h-6 w-full mb-2" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-4 w-full mt-4 mb-2" />
                                <Skeleton className="h-4 w-3/4" />
                            </CardContent>
                            <CardFooter>
                                <Skeleton className="h-10 w-full" />
                            </CardFooter>
                        </Card>
                    ))
                : updates.map((update) => (
                    <Card key={update.id} className="overflow-hidden">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                {getUpdateBadge(update.type)}
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Calendar className="mr-1 h-4 w-4" />
                                    {new Date(update.date).toLocaleDateString()}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-2">{update.title}</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{update.description}</p>
                        </CardContent>
                        <CardFooter>
                            {update.link ? (
                                <Button className="w-full" asChild>
                                    <Link href={update.link}>View Details</Link>
                                </Button>
                            ) : (
                                <Button className="w-full" variant="outline">
                                    Read More
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
        </div>
    );
}