"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/lib/types/dashboard";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";

interface ProgressOverviewProps {
    userId: string;
}

export function ProgressOverview({ userId }: ProgressOverviewProps) {
    const [progress, setProgress] = useState<UserProgress | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                // TODO: Replace with actual API call
                const mockProgress: UserProgress = {
                    userId,
                    totalStudyHours: 0,
                    testsCompleted: 0,
                    averageScore: 0,
                    subjectProgress: {
                        Mathematics: 0,
                        Physics: 0,
                        Chemistry: 0,
                        Biology: 0,
                    },
                    weeklyActivity: Array.from({ length: 7 }, (_, i) => ({
                        date: format(new Date().setDate(new Date().getDate() - i), "yyyy-MM-dd"),
                        hours: Math.floor(Math.random() * 6) + 1,
                    })).reverse(),
                    recentActivity: [
                        {
                            id: "1",
                            type: "test",
                            title: "Completed Physics Practice Test",
                            timestamp: new Date().toISOString(),
                        },
                        {
                            id: "2",
                            type: "study",
                            title: "Studied Calculus for 2 hours",
                            timestamp: new Date(Date.now() - 3600000).toISOString(),
                        },
                    ],
                };

                setProgress(mockProgress);
            } catch (error) {
                console.error("Failed to fetch progress:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, [userId]);

    if (loading || !progress) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Study Time Overview */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Weekly Study Activity</h3>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={progress.weeklyActivity}>
                            <CartesianGrid strokeDasharray="3 6" />
                            <XAxis
                                dataKey="date"
                                tickFormatter={(date) => format(new Date(date), "EEE")}
                            />
                            <YAxis />
                            <Tooltip
                                labelFormatter={(date) => format(new Date(date), "MMM dd, yyyy")}
                                formatter={(value: number) => [`${value} hours`, "Study Time"]}
                            />
                            <Line
                                type="monotone"
                                dataKey="hours"
                                stroke="hsl(var(--primary))"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            {/* Subject Progress */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Subject Progress</h3>
                <div className="space-y-4">
                    {Object.entries(progress.subjectProgress).map(([subject, value]) => (
                        <div key={subject} className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>{subject}</span>
                                <span>{value}%</span>
                            </div>
                            <Progress value={value} />
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}