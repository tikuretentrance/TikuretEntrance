import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, BookOpen, Heart } from "lucide-react"

export function BookStats() {
    return (
        <Card className="p-4 space-y-4">
            <h3 className="font-medium">Reading Progress</h3>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>Books Completed</span>
                    <span className="font-medium">12/30</span>
                </div>
                <Progress value={40} />
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">Recently Viewed</span>
                    </div>
                    <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm">Active Books</span>
                    </div>
                    <span className="text-sm font-medium">5</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-primary" />
                        <span className="text-sm">Favorites</span>
                    </div>
                    <span className="text-sm font-medium">8</span>
                </div>
            </div>
        </Card>
    )
}