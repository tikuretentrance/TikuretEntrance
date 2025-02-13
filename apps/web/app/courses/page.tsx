'use client';

import { CourseGrid } from "@/components/courses/course-grid";
import { SubjectFilter } from "@/components/courses/subject-filter";
import { GradeFilter } from "@/components/courses/grade-filter";

export default function CoursesPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Courses</h1>
          <p className="text-muted-foreground">
            Explore our comprehensive curriculum designed for Ethiopian university entrance exam preparation
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 space-y-6">
            <GradeFilter />
            <SubjectFilter />
          </aside>

          <main className="flex-1">
            <CourseGrid />
          </main>
        </div>
      </div>
    </div>
  );
}