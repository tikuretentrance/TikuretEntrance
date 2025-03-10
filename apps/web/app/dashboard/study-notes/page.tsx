"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { StudyNotesList } from "@/components/dashboard/study-notes/study-notes-list";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";

export default function StudyNotesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [subject, setSubject] = useState("all");
    const [difficulty, setDifficulty] = useState("all");

    return (
        <div className="container py-8 mx-auto">
            <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                <DashboardSidebar />
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 text-gradient">Study Notes & Guides</h1>
                        <p className="text-muted-foreground">
                            Access comprehensive study materials and guides for your exam preparation
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-[1fr_200px_200px]">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search questions by topic or content..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9"
                            />
                        </div>

                        <Select value={subject} onValueChange={setSubject}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Subjects</SelectItem>
                                <SelectItem value="mathematics">Mathematics</SelectItem>
                                <SelectItem value="physics">Physics</SelectItem>
                                <SelectItem value="chemistry">Chemistry</SelectItem>
                                <SelectItem value="biology">Biology</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={difficulty} onValueChange={setDifficulty}>
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
                    </div>

                    <StudyNotesList searchQuery={searchQuery} />
                </div>
            </div>
        </div>
    );
}