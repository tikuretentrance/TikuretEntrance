"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, BookOpen, CheckCircle, AlertCircle, Plus, Edit2 } from "lucide-react";
import { Subject, Topic, StudyGoal } from "@/lib/types/study";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { ProgressOverview } from "@/components/dashboard/progress-overview";
import { StudyGoals } from "@/components/dashboard/study-goal";
import { UpcomingTests } from "@/components/dashboard/upcoming-tests";

// Mock data - replace with API calls in production
const mockSubjects: Subject[] = [
    {
        id: "math",
        name: "Mathematics",
        progress: 65,
        topics: [
            {
                id: "math-1",
                title: "Calculus",
                description: "Limits, derivatives, and integrals",
                totalHours: 20,
                completedHours: 13,
                progress: 65,
                subtopics: [
                    {
                        id: "math-1-1",
                        title: "Limits and Continuity",
                        completed: true,
                        estimatedMinutes: 120
                    },
                    {
                        id: "math-1-2",
                        title: "Differentiation",
                        completed: true,
                        estimatedMinutes: 180
                    },
                    {
                        id: "math-1-3",
                        title: "Integration",
                        completed: false,
                        estimatedMinutes: 240
                    }
                ]
            },
            {
                id: "math-2",
                title: "Linear Algebra",
                description: "Matrices, vectors, and linear transformations",
                totalHours: 15,
                completedHours: 5,
                progress: 33,
                subtopics: [
                    {
                        id: "math-2-1",
                        title: "Matrices and Determinants",
                        completed: true,
                        estimatedMinutes: 120
                    },
                    {
                        id: "math-2-2",
                        title: "Vector Spaces",
                        completed: false,
                        estimatedMinutes: 180
                    }
                ]
            }
        ]
    }
];

const mockGoals: StudyGoal[] = [
    {
        id: "g1",
        subjectId: "math",
        targetHours: 6,
        completedHours: 5,
        deadline: "2025-03-20",
        type: "daily"
    },
    {
        id: "g2",
        subjectId: "math",
        targetHours: 30,
        completedHours: 18,
        deadline: "2025-03-24",
        type: "weekly"
    },
    {
        id: "g3",
        subjectId: "chem",
        targetHours: 30,
        completedHours: 18,
        deadline: "2025-03-24",
        type: "monthly"
    }
];

export default function StudyPlanPage() {
    const [selectedSubject, setSelectedSubject] = useState(mockSubjects[0]);
    const [showAddGoal, setShowAddGoal] = useState(false);
    const [newGoal, setNewGoal] = useState({
        subject: "",
        hours: "",
        type: "daily",
        deadline: ""
    });

    const handleAddGoal = () => {
        // Add goal logic here
        setShowAddGoal(false);
    };

    const userId = ""
    return (
        <div className="container mx-auto py-8">
            <div className="grid gap-8 md:grid-cols-[240px_1fr] px-4">
                <DashboardSidebar />
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2 text-gradient">Study Plan</h1>
                            <p className="text-muted-foreground">
                                Track and manage your study progress
                            </p>
                        </div>
                        {/* <Dialog open={showAddGoal} onOpenChange={setShowAddGoal}>
                            <DialogTrigger asChild>
                                <Button>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Study Goal
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add New Study Goal</DialogTitle>
                                    <DialogDescription>
                                        Set a new study goal to track your progress
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Subject</label>
                                        <Select
                                            value={newGoal.subject}
                                            onValueChange={(value) => setNewGoal({ ...newGoal, subject: value })}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select subject" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {mockSubjects.map((subject) => (
                                                    <SelectItem key={subject.id} value={subject.id}>
                                                        {subject.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Target Hours</label>
                                        <Input
                                            type="number"
                                            value={newGoal.hours}
                                            onChange={(e) => setNewGoal({ ...newGoal, hours: e.target.value })}
                                            placeholder="Enter target hours"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Goal Type</label>
                                        <Select
                                            value={newGoal.type}
                                            onValueChange={(value) => setNewGoal({ ...newGoal, type: value })}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select goal type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="daily">Daily</SelectItem>
                                                <SelectItem value="weekly">Weekly</SelectItem>
                                                <SelectItem value="monthly">Monthly</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Deadline</label>
                                        <Input
                                            type="date"
                                            value={newGoal.deadline}
                                            onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button variant="outline" onClick={() => setShowAddGoal(false)}>
                                        Cancel
                                    </Button>
                                    <Button onClick={handleAddGoal}>Add Goal</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog> */}
                    </div>

                    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                        <StudyGoals userId={userId} />
                        <UpcomingTests />
                    </div>
                    <ProgressOverview userId={userId} />

                    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                        <div className="space-y-6">
                            {/* <Card>
                                <CardHeader>
                                    <CardTitle>Subject Progress</CardTitle>
                                    <CardDescription>
                                        Track your progress across different subjects
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        {mockSubjects.map((subject) => (
                                            <div key={subject.id} className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="font-medium">{subject.name}</span>
                                                    <span>{subject.progress}%</span>
                                                </div>
                                                <Progress value={subject.progress} />
                                                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                                                    {subject.topics.map((topic) => (
                                                        <div key={topic.id} className="flex items-center gap-2">
                                                            <div className={`h-2 w-2 rounded-full ${topic.progress >= 100
                                                                ? "bg-green-500"
                                                                : topic.progress > 0
                                                                    ? "bg-yellow-500"
                                                                    : "bg-gray-300"
                                                                }`} />
                                                            <span>{topic.title}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card> */}

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle>Current Topics</CardTitle>
                                        <Select
                                            value={selectedSubject.id}
                                            onValueChange={(value) => {
                                                const subject = mockSubjects.find(s => s.id === value);
                                                if (subject) setSelectedSubject(subject);
                                            }}
                                        >
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select subject" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {mockSubjects.map((subject) => (
                                                    <SelectItem key={subject.id} value={subject.id}>
                                                        {subject.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        {selectedSubject.topics.map((topic) => (
                                            <div key={topic.id} className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h3 className="font-medium">{topic.title}</h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {topic.description}
                                                        </p>
                                                    </div>
                                                    <Button variant="outline" size="sm">
                                                        <Edit2 className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </Button>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span>{topic.completedHours} of {topic.totalHours} hours</span>
                                                        <span>{topic.progress}%</span>
                                                    </div>
                                                    <Progress value={topic.progress} />
                                                </div>
                                                <div className="grid gap-2">
                                                    {topic.subtopics.map((subtopic) => (
                                                        <div
                                                            key={subtopic.id}
                                                            className="flex items-center justify-between p-2 rounded-lg border"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                {subtopic.completed ? (
                                                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                                                ) : (
                                                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                                                )}
                                                                <span className="text-sm">{subtopic.title}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm text-muted-foreground">
                                                                    {Math.round(subtopic.estimatedMinutes / 60)} hours
                                                                </span>
                                                                {!subtopic.completed && (
                                                                    <Button size="sm">Start</Button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Study Goals</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {mockGoals.map((goal) => (
                                        <div
                                            key={goal.id}
                                            className="p-4 rounded-lg border space-y-2"
                                        >
                                            <div className="flex items-center justify-between">
                                                <Badge>
                                                    {goal.type.charAt(0).toUpperCase() + goal.type.slice(1)}
                                                </Badge>
                                                <span className="text-sm text-muted-foreground">
                                                    Due {new Date(goal.deadline).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>Progress</span>
                                                    <span>{goal.completedHours}/{goal.targetHours} hours</span>
                                                </div>
                                                <Progress
                                                    value={(goal.completedHours / goal.targetHours) * 100}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* <Card>
                                <CardHeader>
                                    <CardTitle>Upcoming Deadlines</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between p-3 rounded-lg border">
                                        <div className="space-y-1">
                                            <div className="font-medium">Physics Assignment</div>
                                            <div className="text-sm text-muted-foreground">Due in 2 days</div>
                                        </div>
                                        <AlertCircle className="h-5 w-5 text-amber-500" />
                                    </div>

                                    <div className="flex items-center justify-between p-3 rounded-lg border">
                                        <div className="space-y-1">
                                            <div className="font-medium">Mock Entrance Exam</div>
                                            <div className="text-sm text-muted-foreground">Due in 5 days</div>
                                        </div>
                                        <AlertCircle className="h-5 w-5 text-amber-500" />
                                    </div>
                                </CardContent>
                            </Card> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}