'use client'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, Users, Award, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Exam } from "@/lib/types"
import { useAuth } from "@clerk/nextjs"


interface ExamCardProps {
  exam: Exam
}

export function ExamCard({ exam }: ExamCardProps) {
const { isSignedIn } = useAuth()
return (
    <Card className="flex flex-col card-interactive">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{exam.stream}</Badge>
          <Badge variant="outline" className="pill">{exam.year}</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gradient">{exam.subject}</h3>
          <p className="text-sm text-muted-foreground">{exam.description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-primary" />
            {exam.duration} minutes
          </div>
          <div className="flex items-center">
            <FileText className="mr-2 h-4 w-4 text-primary" />
            {exam.questions} questions
          </div>
          <div className="flex items-center">
            <GraduationCap className="mr-2 h-4 w-4 text-primary" />
            <span>{exam.stream.charAt(0).toUpperCase() + exam.stream.slice(1)} Stream</span>
          </div>
          {/* <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-primary" />
            {exam.attempts} attempts
          </div> */}
          {/* <div className="flex items-center">
            <Award className="mr-2 h-4 w-4 text-primary" />
            Average score: {exam.averageScore}%
          </div> */}
        </div>
      </CardContent>
      <CardFooter>
        {isSignedIn ? (
          <Button className="w-full gradient-primary hover-lift" asChild>
            <Link href={`/dashboard/exam/${exam.id}`}>Start Exam</Link>
          </Button>
        ) : (
          <Button className="w-full gradient-primary hover-lift" asChild>
            <Link href="/sign-in">Sign In to Start Exam</Link>
          </Button>
        )}

      </CardFooter>
    </Card>
  )
}