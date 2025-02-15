import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function TestStats() {
  return (
    <Card className="p-4 space-y-4">
      <h3 className="font-medium">Your Progress</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Tests Completed</span>
          <span className="font-medium">12/30</span>
        </div>
        <Progress value={40} />
      </div>
      <div className="space-y-1">
        <div className="text-sm font-medium">Average Score</div>
        <div className="text-2xl font-bold">76%</div>
        <div className="text-xs text-muted-foreground">+5% from last week</div>
      </div>
    </Card>
  );
}