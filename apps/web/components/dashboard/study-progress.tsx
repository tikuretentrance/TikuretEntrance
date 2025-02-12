import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const subjects = [
  { name: "Mathematics", progress: 75 },
  { name: "Physics", progress: 60 },
  { name: "Chemistry", progress: 45 },
  { name: "Biology", progress: 80 },
]

export function StudyProgress() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Study Progress</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subjects.map((subject) => (
            <div key={subject.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{subject.name}</span>
                <span className="text-muted-foreground">{subject.progress}%</span>
              </div>
              <Progress value={subject.progress} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}