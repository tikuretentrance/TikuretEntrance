"use client";

import { studyPlans } from "@/lib/study-plans-data";
import { StudyPlanCard } from "./study-plan-card";

export function StudyPlanGrid() {
    return (
        <div className="grid gap-6">
            {studyPlans.map((plan) => (
                <StudyPlanCard key={plan.id} plan={plan} />
            ))}
        </div>
    );
}