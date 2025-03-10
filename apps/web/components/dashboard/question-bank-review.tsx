"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

interface QuestionBank {
    id: string;
    subject: string;
    title: string;
    questionCount: number;
    difficulty: "Easy" | "Medium" | "Hard";
    completedCount: number;
}

const mockQuestionBanks: Record<string, QuestionBank[]> = {
    mathematics: [
        {
            id: "math-algebra",
            subject: "Mathematics",
            title: "Algebra Fundamentals",
            questionCount: 50,
            difficulty: "Medium",
            completedCount: 25,
        },
        {
            id: "math-calculus",
            subject: "Mathematics",
            title: "Calculus & Integration",
            questionCount: 40,
            difficulty: "Hard",
            completedCount: 10,
        },
    ],
    physics: [
        {
            id: "physics-mechanics",
            subject: "Physics",
            title: "Classical Mechanics",
            questionCount: 45,
            difficulty: "Medium",
            completedCount: 30,
        },
        {
            id: "physics-electricity",
            subject: "Physics",
            title: "Electricity & Magnetism",
            questionCount: 35,
            difficulty: "Hard",
            completedCount: 5,
        },
    ],
    chemistry: [
        {
            id: "chem-organic",
            subject: "Chemistry",
            title: "Organic Chemistry",
            questionCount: 60,
            difficulty: "Hard",
            completedCount: 15,
        },
        {
            id: "chem-periodic",
            subject: "Chemistry",
            title: "Periodic Table & Elements",
            questionCount: 30,
            difficulty: "Easy",
            completedCount: 20,
        },
    ],
};

export function QuestionBankPreview() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
            case "Medium":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
            case "Hard":
                return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
            default:
                return "";
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>Question Banks</span>
                    <Badge variant="outline">New</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                ) : (
                    <Tabs defaultValue="mathematics">
                        <TabsList className="grid grid-cols-3 mb-4">
                            <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
                            <TabsTrigger value="physics">Physics</TabsTrigger>
                            <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
                        </TabsList>

                        {Object.entries(mockQuestionBanks).map(([subject, banks]) => (
                            <TabsContent key={subject} value={subject} className="space-y-4">
                                {banks.map((bank) => (
                                    <div
                                        key={bank.id}
                                        className="flex justify-between items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <FileText className="h-4 w-4 text-primary" />
                                                <span className="font-medium">{bank.title}</span>
                                                <Badge className={getDifficultyColor(bank.difficulty)}>
                                                    {bank.difficulty}
                                                </Badge>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {bank.completedCount}/{bank.questionCount} questions completed
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm" className="gap-1" asChild>
                                            <Link href={`/dashboard/question-banks/${bank.id}`}>
                                                Practice
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                            </TabsContent>
                        ))}
                    </Tabs>
                )}
            </CardContent>
            <CardFooter>
                <Button className="w-full" asChild>
                    <Link href="/dashboard/practice-zone">View All Question Banks</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}