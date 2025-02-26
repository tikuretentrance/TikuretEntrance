'use client';

import { Card } from "../ui/card";
import { BookOpen, FileText, GraduationCap, Brain, Target, BarChart } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Complete Curriculum",
      description: "Access the entire Grade 9-12 curriculum with detailed explanations and examples",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Previous Exams",
      description: "Practice with past entrance exams and detailed solutions from the last 10 years",
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Smart Study Guides",
      description: "Comprehensive study materials and notes for all subjects",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Practice Tests",
      description: "Regular mock tests with real exam-like questions and timing",
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed performance analytics",
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Expert Support",
      description: "Get help from experienced teachers and exam experts",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
        Everything You Need to Excel
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6  card-hover ">
            <div className="mb-4 text-primary">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}