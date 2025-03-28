import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Lock, Users } from "lucide-react";
import Link from "next/link";
import { Course } from "@/lib/types/course";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col card-hover">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="pill">{course.grade}</Badge>
          <Badge variant="outline" className="pill">{course.subject}</Badge>
        </div>
        <h3 className="text-xl font-semibold text-gradient">{course.title}</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">{course.description}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-primary" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4 text-primary" />
            {course.lessons} lessons
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-primary" />
            {course.students} students enrolled
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {/* <Button className="w-full button-gradient" asChild disabled>
          <Link href={`/courses/${course.id}`}>Start Learning</Link>
        </Button> */}
        <Button className="w-full button-gradient" disabled>
          <Link href={`#`}></Link>
          <Lock className="mr-2 h-4 w-4" />
          Coming Soon
        </Button>
      </CardFooter>
    </Card >
  );
}