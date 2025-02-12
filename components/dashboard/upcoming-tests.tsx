import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

const upcomingTests = [
  {
    id: "test-1",
    title: "Mathematics Mock Exam",
    date: "Tomorrow, 10:00 AM",
    duration: "3 hours",
  },
  {
    id: "test-2",
    title: "Physics Practice Test",
    date: "Friday, 2:00 PM",
    duration: "2 hours",
  },
]

export function UpcomingTests() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Upcoming Tests</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingTests.map((test) => (
            <div
              key={test.id}
              className="flex flex-col space-y-2 rounded-lg border p-4"
            >
              <h3 className="font-medium">{test.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {test.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {test.duration}
                </div>
              </div>
              <Button asChild className="mt-2">
                <Link href={`/practice/${test.id}`}>Start Test</Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}