import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Award, Clock, Target } from "lucide-react"

export function ProfileStats() {
  const stats = [
    {
      icon: Clock,
      label: "Study Time",
      value: "120 hours",
    },
    {
      icon: Target,
      label: "Tests Taken",
      value: "45",
    },
    {
      icon: Award,
      label: "Achievements",
      value: "12",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Statistics</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="font-medium">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}