import { Card } from "@/components/ui/card"
import { Brain, Target, Clock, TrendingUp, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "../ui/alert"

/**
 * Renders the dashboard statistics.
 * 
 * @remarks
 * The statistics displayed are sample data and are not up to date.
 * 
 * @returns A grid of cards displaying various statistics.
 */
export function DashboardStats() {
  const stats = [
    {
      title: "Study Hours",
      value: "42",
      change: "+12%",
      icon: Clock,
    },
    {
      title: "Tests Completed",
      value: "24",
      change: "+8%",
      icon: Target,
    },
    {
      title: "Average Score",
      value: "76%",
      change: "+5%",
      icon: Brain,
    },
    {
      title: "Topics Mastered",
      value: "18",
      change: "+3",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="space-y-3">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <stat.icon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-green-600 dark:text-green-500">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </Card>
        ))}
      </div>
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          The statistics displayed above are sample data, not actual. They are for inspiration, and we'll keep you posted.
        </AlertDescription>
      </Alert>
    </div>
  )
}