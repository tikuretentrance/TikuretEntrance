"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { StudyGoal } from "@/lib/types/dashboard";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studyGoalSchema } from "@/lib/types/dashboard";
import { toast } from "sonner";

interface StudyGoalsProps {
    userId: string;
}

export function StudyGoals({ userId }: StudyGoalsProps) {
    const [goals, setGoals] = useState<StudyGoal[]>([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(studyGoalSchema),
        defaultValues: {
            id: "",
            userId,
            subject: "",
            targetHours: 0,
            completedHours: 0,
            deadline: "",
            type: "weekly" as "daily" | "weekly" | "monthly",
            progress: 0,
        },
    });

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                // TODO: Replace with actual API call
                const mockGoals: StudyGoal[] = [
                    {
                        id: "1",
                        userId,
                        subject: "Mathematics",
                        targetHours: 20,
                        completedHours: 12,
                        deadline: "2025-03-31",
                        type: "weekly",
                        progress: 60,
                    },
                    {
                        id: "2",
                        userId,
                        subject: "Physics",
                        targetHours: 15,
                        completedHours: 5,
                        deadline: "2025-03-31",
                        type: "weekly",
                        progress: 33,
                    },
                ];

                setGoals(mockGoals);
            } catch (error) {
                console.error("Failed to fetch goals:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGoals();
    }, [userId]);

    const onSubmit = async (data: StudyGoal) => {
        try {
            // TODO: Replace with actual API call
            const newGoal = {
                ...data,
                id: Date.now().toString(),
                progress: 0,
            };

            setGoals((prev) => [...prev, newGoal]);
            setDialogOpen(false);
            form.reset();

            toast.success("Study goal has been created.");
        } catch (error) {
            // toast({
            //   title: "Error",
            //   description: "Failed to create study goal.",
            //   variant: "destructive",
            // });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Study Goals</h3>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Goal
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create Study Goal</DialogTitle>
                            <DialogDescription>
                                Set a new study goal to track your progress
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subject</label>
                                <Select
                                    onValueChange={(value) => form.setValue("subject", value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select subject" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Mathematics">Mathematics</SelectItem>
                                        <SelectItem value="Physics">Physics</SelectItem>
                                        <SelectItem value="Chemistry">Chemistry</SelectItem>
                                        <SelectItem value="Biology">Biology</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Target Hours</label>
                                <Input
                                    type="number"
                                    {...form.register("targetHours", { valueAsNumber: true })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Deadline</label>
                                <Input type="date" {...form.register("deadline")} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Goal Type</label>
                                <Select
                                    onValueChange={(value: "daily" | "weekly" | "monthly") =>
                                        form.setValue("type", value)
                                    }
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

                            <DialogFooter>
                                <Button type="submit">Create Goal</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="space-y-6">
                {goals.map((goal) => (
                    <div key={goal.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium">{goal.subject}</h4>
                                <p className="text-sm text-muted-foreground">
                                    {goal.completedHours} of {goal.targetHours} hours completed
                                </p>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Due {new Date(goal.deadline).toLocaleDateString()}
                            </div>
                        </div>
                        <Progress value={goal.progress} />
                    </div>
                ))}
            </div>
        </Card>
    );
}