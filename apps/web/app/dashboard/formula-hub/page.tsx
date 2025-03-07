"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Star } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

interface Formula {
    id: string;
    title: string;
    formula: string;
    description: string;
    subject: string;
    topic: string;
    important?: boolean;
}

const formulas: Formula[] = [
    {
        id: "f1",
        title: "Quadratic Formula",
        formula: "x = (-b ± √(b² - 4ac)) / 2a",
        description: "Solves quadratic equations in the form ax² + bx + c = 0",
        subject: "Mathematics",
        topic: "Algebra",
        important: true,
    },
    {
        id: "f2",
        title: "Newton's Second Law",
        formula: "F = ma",
        description: "Force equals mass times acceleration",
        subject: "Physics",
        topic: "Mechanics",
        important: true,
    },
    {
        id: "f3",
        title: "Ideal Gas Law",
        formula: "PV = nRT",
        description: "Relates pressure, volume, amount of substance, and temperature of a gas",
        subject: "Chemistry",
        topic: "Gas Laws",
        important: true,
    },
];

export default function FormulaHubPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filterFormulas = (subject: string) => {
        return formulas.filter(formula => {
            const matchesSearch = searchQuery === "" ||
                formula.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                formula.description.toLowerCase().includes(searchQuery.toLowerCase());

            return subject === "all" ? matchesSearch : (formula.subject === subject && matchesSearch);
        });
    };

    return (
        <div className="container py-8 mx-auto">
            <div className="grid gap-6 md:grid-cols-[240px_1fr]">
                <DashboardSidebar />
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Formula Hub</h1>
                        <p className="text-muted-foreground">
                            Quick access to important formulas and equations
                        </p>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search formulas..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>

                    <Tabs defaultValue="all">
                        <TabsList className="grid grid-cols-4 mb-6">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="Mathematics">Mathematics</TabsTrigger>
                            <TabsTrigger value="Physics">Physics</TabsTrigger>
                            <TabsTrigger value="Chemistry">Chemistry</TabsTrigger>
                        </TabsList>

                        {["all", "Mathematics", "Physics", "Chemistry"].map((subject) => (
                            <TabsContent key={subject} value={subject}>
                                <div className="grid gap-4">
                                    {filterFormulas(subject).map((formula) => (
                                        <Card key={formula.id} className="hover:bg-muted/50 transition-colors">
                                            <CardHeader className="pb-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <CardTitle className="text-lg">{formula.title}</CardTitle>
                                                        {formula.important && (
                                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant="outline">{formula.topic}</Badge>
                                                        <Badge>{formula.subject}</Badge>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-2">
                                                    <div className="bg-muted/50 p-3 rounded-lg font-mono text-lg text-center">
                                                        {formula.formula}
                                                    </div>
                                                    <p className="text-muted-foreground">
                                                        {formula.description}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    );
}