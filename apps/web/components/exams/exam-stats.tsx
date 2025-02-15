import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ExamStats() {
    return (
        <Card className="p-4 space-y-4">
            <h3 className="font-medium">Your Progress</h3>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>Exams Completed</span>
                    <span className="font-medium">8/20</span>
                </div>
                <Progress value={40} className="h-2" />
            </div>
            <div className="space-y-1">
                <div className="text-sm font-medium">Average Score</div>
                <div className="text-2xl font-bold text-primary">72%</div>
                <div className="text-xs text-muted-foreground">+3% from last exam</div>
            </div>
        </Card>
    )
}