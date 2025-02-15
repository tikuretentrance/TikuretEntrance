import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { Test } from "@/lib/types";

interface TestCardProps {
  test: Test;
}

export function TestCard({ test }: TestCardProps) {
  return (
    <Card className="flex flex-col card-hover">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{test.subject}</Badge>
          <Badge
            // variant={test.difficulty === "Easy" ? "outline" :
            //   test.difficulty === "Medium" ? "secondary" : "destructive"}
            variant={'outline'}
            className="pill"
          >
            {test.difficulty}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold text-gradient">{test.title}</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-primary" />
            {test.duration} minutes
          </div>
          <div className="flex items-center">
            <Trophy className="mr-2 h-4 w-4 text-primary" />
            Average score: {test.averageScore}%
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-primary" />
            {test.attempts} attempts
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full button-gradient" asChild>
          <Link href={`/practice/${test.id}`}>Start Test</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}