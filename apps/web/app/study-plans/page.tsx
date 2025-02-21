import { StudyPlanGrid } from "@/components/study-plans/study-plan-grid";
import { StudyProgress } from "@/components/study-plans/study-progress";
import { NextSession } from "@/components/study-plans/next-session";
import { studyPlans } from "@/lib/study-plans-data";

export default function StudyPlansPage() {
    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Study Plans</h1>
                    <p className="text-muted-foreground">
                        Your personalized learning journey for exam success
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                    <main>
                        <StudyPlanGrid />
                    </main>
                    <aside className="space-y-6">
                        <StudyProgress />
                        {studyPlans.map((plan) => (
                            <NextSession key={plan.id} nextSession={plan.nextSession} />
                        ))}
                    </aside>
                </div>
            </div>
        </div>
    );
}