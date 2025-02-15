"use client";

import { TestCard } from "./test-card";
import { tests } from "@/lib/tests-data";

export function TestGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
}