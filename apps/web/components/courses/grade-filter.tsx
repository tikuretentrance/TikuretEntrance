"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const grades = ["All Grades", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

export function GradeFilter() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Grade Level</h3>
      <RadioGroup defaultValue="All Grades">
        {grades.map((grade) => (
          <div key={grade} className="flex items-center space-x-2">
            <RadioGroupItem value={grade.toLowerCase().replace(" ", "-")} id={grade} />
            <Label htmlFor={grade}>{grade}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}