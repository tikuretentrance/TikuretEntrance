import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function StudyProgress() {
    return (
        <Card>
            <CardHeader>
                <h3 className="font-medium">Overall Progress</h3>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>Study Time</span>
                        <span className="font-medium">42/120 hours</span>
                    </div>
                    <Progress value={35} />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>Topics Covered</span>
                        <span className="font-medium">16/40</span>
                    </div>
                    <Progress value={40} />
                </div>

                <div className="pt-2 text-sm text-muted-foreground">
                    You're making great progress! Keep up the good work to stay on track for your exam preparation.
                </div>
            </CardContent>
        </Card>
    );
}