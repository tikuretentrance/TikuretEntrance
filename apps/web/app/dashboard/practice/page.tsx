import { TestGrid } from "@/components/practice/test-grid";
import { DifficultyFilter } from "@/components/practice/difficulty-filter";
import { SubjectFilter } from "@/components/practice/subject-filter";
import { TestStats } from "@/components/practice/test-stats";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function PracticePage() {
  return (
    <div className="container py-8 mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <DashboardSidebar />
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Practice Tests</h1>
            <p className="text-muted-foreground">
              Take simulated entrance exam tests and track your progress
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[240px_1fr]">
            <aside className="space-y-6">
              {/* <TestStats /> */}
              <DifficultyFilter />
              <SubjectFilter />
            </aside>

            <main>
              <TestGrid />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}