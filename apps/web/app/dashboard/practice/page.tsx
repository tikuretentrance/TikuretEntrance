'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Clock, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { practiceData } from "@/lib/practice-data";;



export default function PracticePage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [questionCount, setQuestionCount] = useState("all");

  const filteredSets = practiceData.filter(set => {
    if (searchQuery && !set.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedSubject !== "all" && set.subject !== selectedSubject) {
      return false;
    }
    if (selectedDifficulty !== "all" && set.difficulty !== selectedDifficulty) {
      return false;
    }
    if (questionCount !== "all") {
      const count = parseInt(questionCount);
      if (set.questionCount !== count) {
        return false;
      }
    }
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
      default:
        return "";
    }
  };


  return (
    <div className="container py-8 mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <DashboardSidebar />
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gradient">Practice Zone</h1>
            <p className="text-muted-foreground">
              Practice with targeted question sets to improve your understanding
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_200px_200px_200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search practice sets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Select Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            <Select value={questionCount} onValueChange={setQuestionCount}>
              <SelectTrigger>
                <SelectValue placeholder="Question Count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Count</SelectItem>
                <SelectItem value="10">10 Questions</SelectItem>
                <SelectItem value="15">15 Questions</SelectItem>
                <SelectItem value="20">20 Questions</SelectItem>
                <SelectItem value="25">25 Questions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Sets</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {filteredSets.map((practiceSet) => (
                  <Card key={practiceSet.id} className="hover:bg-muted/50 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <CardTitle className="text-xl">{practiceSet.title}</CardTitle>
                          <div className="flex flex-wrap gap-1 mt-2">
                            <Badge variant="outline">{practiceSet.subject}</Badge>
                            <Badge variant="outline">{practiceSet.topic}</Badge>
                            <Badge className={getDifficultyColor(practiceSet.difficulty)}>
                              {practiceSet.difficulty.charAt(0).toUpperCase() + practiceSet.difficulty.slice(1)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{practiceSet.timeLimit}m</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{practiceSet.attempts}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Award className="h-4 w-4" />
                          <span>{practiceSet.averageScore}%</span>
                        </div>
                      </div>
                      <Button className="mt-3 w-full gradient-primary hover-lift" asChild>
                        <Link href={`/dashboard/practice-zone/${practiceSet.id}`}>
                          Start
                        </Link>
                      </Button>
                      {/* <Button className="w-full gradient-primary hover-lift" asChild>
          <Link href={`/dashboard/exam/${exam.id}`}>Start Exam</Link>
        </Button> */}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

          </Tabs>


          {/* <div className="grid gap-6 md:grid-cols-[240px_1fr]">
            <aside className="space-y-6">
              <TestStats />
              <DifficultyFilter />
              <SubjectFilter />
            </aside> */}

          {/* <main>
            <PracticeGrid />
          </main> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}