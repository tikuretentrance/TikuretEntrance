import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { StudyPlan } from "@/lib/types";

interface StudyPlanCardProps {
    plan: StudyPlan;
}

export function StudyPlanCard({ plan }: StudyPlanCardProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{plan.subject}</Badge>
                    <span className="text-sm text-muted-foreground">
                        {plan.completedHours} of {plan.totalHours} hours
                    </span>
                </div>
                <h3 className="text-xl font-semibold">{plan.title}</h3>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Overall Progress</span>
                            <span>{plan.progress}%</span>
                        </div>
                        <Progress value={plan.progress} />
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-medium">Topics</h4>
                        {plan.topics.map((topic) => (
                            <div key={topic.id} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" />
                                    <span>{topic.title}</span>
                                </div>
                                <span className="text-muted-foreground">
                                    {topic.completedItems}/{topic.totalItems}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}