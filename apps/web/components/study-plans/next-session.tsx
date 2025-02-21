import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";
import { format } from "date-fns";

export function NextSession() {
    const nextSession = {
        topic: "Integration Techniques",
        duration: 2,
        scheduledFor: "2024-03-25T14:00:00Z"
    };

    return (
        <Card>
            <CardHeader>
                <h3 className="font-medium">Next Study Session</h3>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <h4 className="font-medium">{nextSession.topic}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        {nextSession.duration} hours
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {format(new Date(nextSession.scheduledFor), "PPp")}
                    </div>
                </div>

                <Button className="w-full">Start Session</Button>
            </CardContent>
        </Card>
    );
}