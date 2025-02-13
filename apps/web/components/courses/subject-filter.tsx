"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Civics",
];

export function SubjectFilter() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Subjects</h3>
      <div className="space-y-2">
        {subjects.map((subject) => (
          <div key={subject} className="flex items-center space-x-2">
            <Checkbox id={subject} />
            <Label htmlFor={subject}>{subject}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}