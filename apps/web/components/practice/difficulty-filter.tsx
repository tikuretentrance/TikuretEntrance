"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const difficulties = ["All Levels", "Easy", "Medium", "Hard"];

export function DifficultyFilter() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Difficulty</h3>
      <RadioGroup defaultValue="all">
        {difficulties.map((difficulty) => (
          <div key={difficulty} className="flex items-center space-x-2">
            <RadioGroupItem 
              value={difficulty.toLowerCase()} 
              id={difficulty}
            />
            <Label htmlFor={difficulty}>{difficulty}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}