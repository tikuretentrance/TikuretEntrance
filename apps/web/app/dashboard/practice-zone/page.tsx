"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search, Clock, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PracticeSet } from "@/lib/types/practice";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

// Mock data - replace with API call in production
const mockPracticeSets: PracticeSet[] = [
    {
        id: "p1",
        title: "Calculus Fundamentals",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "medium",
        questionCount: 20,
        timeLimit: 45,
        questions: [],
        attempts: 156,
        averageScore: 72
    },
    {
        id: "p2",
        title: "Newton's Laws Practice",
        subject: "Physics",
        topic: "Mechanics",
        difficulty: "easy",
        questionCount: 15,
        timeLimit: 30,
        questions: [],
        attempts: 234,
        averageScore: 68
    },
    {
        id: "p3",
        title: "Organic Chemistry Challenge",
        subject: "Chemistry",
        topic: "Organic Chemistry",
        difficulty: "hard",
        questionCount: 25,
        timeLimit: 60,
        questions: [],
        attempts: 89,
        averageScore: 65
    }
];

export default function PracticePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("all");
    const [selectedDifficulty, setSelectedDifficulty] = useState("all");
    const [questionCount, setQuestionCount] = useState("all");

    const filteredSets = mockPracticeSets.filter(set => {
        if (searchQuery && !set.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        if (selectedSubject !== "all" && set.subject !== selectedSubject) {
            return false;
        }
        if (selectedDifficulty !== "all" && set.difficulty !== selectedDifficulty) {
            return false;
        }
        if (questionCount !== "all") {
            const count = parseInt(questionCount);
            if (set.questionCount !== count) {
                return false;
            }
        }
        return true;
    });

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "easy":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
            case "medium":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
            case "hard":
                return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
            default:
                return "";
        }
    };

    return (
        <div className="container mx-auto py-8">
            <div className="grid gap-6 md:grid-cols-[240px_1fr]">
                <DashboardSidebar />
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Practice Zone</h1>
                        <p className="text-muted-foreground">
                            Practice with targeted question sets to improve your understanding
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-[1fr_200px_200px_200px]">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search practice sets..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9"
                            />
                        </div>

                        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Subjects</SelectItem>
                                <SelectItem value="Mathematics">Mathematics</SelectItem>
                                <SelectItem value="Physics">Physics</SelectItem>
                                <SelectItem value="Chemistry">Chemistry</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Levels</SelectItem>
                                <SelectItem value="easy">Easy</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="hard">Hard</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={questionCount} onValueChange={setQuestionCount}>
                            <SelectTrigger>
                                <SelectValue placeholder="Question Count" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Any Count</SelectItem>
                                <SelectItem value="10">10 Questions</SelectItem>
                                <SelectItem value="15">15 Questions</SelectItem>
                                <SelectItem value="20">20 Questions</SelectItem>
                                <SelectItem value="25">25 Questions</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Tabs defaultValue="all">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="all">All Sets</TabsTrigger>
                            <TabsTrigger value="recommended">Recommended</TabsTrigger>
                            <TabsTrigger value="recent">Recent</TabsTrigger>
                            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="mt-6">
                            <div className="grid gap-6">
                                {filteredSets.map((set) => (
                                    <Card key={set.id} className="hover:bg-muted/50 transition-colors">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <CardTitle>{set.title}</CardTitle>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Badge variant="outline">{set.subject}</Badge>
                                                        <Badge variant="outline">{set.topic}</Badge>
                                                        <Badge className={getDifficultyColor(set.difficulty)}>
                                                            {set.difficulty.charAt(0).toUpperCase() + set.difficulty.slice(1)}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <Button asChild>
                                                    <Link href={`/dashboard/practice/${set.id}`}>
                                                        Start Practice
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-3 gap-4 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                                    <span>{set.timeLimit} minutes</span>
                                                </div>
                                                {/* <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-muted-foreground" />
                                                    <span>{set.attempts} attempts</span>
                                                </div> */}
                                                <div className="flex items-center gap-2">
                                                    <Award className="h-4 w-4 text-muted-foreground" />
                                                    <span>Avg. {set.averageScore}%</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}