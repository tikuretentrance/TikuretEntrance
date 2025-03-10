import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Book, CheckCircle2, Target } from "lucide-react"

const activities = [
  {
    type: "course",
    title: "Completed Calculus Module",
    time: "2 hours ago",
    icon: Book,
  },
  {
    type: "test",
    title: "Scored 85% on Physics Test",
    time: "Yesterday",
    icon: Target,
  },
  {
    type: "achievement",
    title: "Mastered Integration Topics",
    time: "2 days ago",
    icon: CheckCircle2,
  },
]

export function RecentActivity({ userId }: any) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Recent Activity</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}