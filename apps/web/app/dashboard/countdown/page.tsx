'use client';

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { 
  Calendar, 
  Clock, 
  Zap, 
  Timer, 
  Brain, 
  Target, 
  Coffee, 
  Dumbbell, 
  Heart, 
  Lightbulb,
  CheckCircle2
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Updated ESSLCE exam date (June 22, 2025)
const EXAM_DATE = new Date('2025-06-21T00:00:00').getTime();

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(true); // Modal initially shown
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    if (startDate) {
      const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const distance = EXAM_DATE - now;

        const preparationStartDate = new Date(startDate).getTime();
        const totalPreparationTime = EXAM_DATE - preparationStartDate;
        const timeSpent = now - preparationStartDate;
        const progressPercentage = (timeSpent / totalPreparationTime) * 100;
        
        setProgress(Math.min(Math.max(progressPercentage, 0), 100));

        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      };

      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);

      return () => clearInterval(timer);
    }
  }, [startDate]);

  const handleStartDateSubmit = () => {
    if (startDate) {
      setShowModal(false);
    }
  };

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days, icon: Calendar },
    { label: 'Hours', value: timeLeft.hours, icon: Clock },
    { label: 'Minutes', value: timeLeft.minutes, icon: Timer },
    { label: 'Seconds', value: timeLeft.seconds, icon: Zap }
  ];

  const studyTips = [
    {
      icon: Brain,
      title: 'Active Learning',
      description: 'Use techniques like summarizing, questioning, and teaching others to deeply understand concepts',
      tag: 'Study Technique'
    },
    {
      icon: Target,
      title: 'Smart Goals',
      description: 'Set specific, measurable goals for each study session to track your progress',
      tag: 'Planning'
    },
    {
      icon: Coffee,
      title: 'Take Breaks',
      description: 'Use the Pomodoro Technique: 25 minutes of study followed by 5-minute breaks',
      tag: 'Wellness'
    },
    {
      icon: Dumbbell,
      title: 'Practice Tests',
      description: 'Regular practice tests help build confidence and improve time management',
      tag: 'Practice'
    }
  ];

  const wellnessTips = [
    {
      icon: Heart,
      title: 'Stay Healthy',
      description: 'Maintain a balanced diet and get enough sleep to keep your mind sharp'
    },
    {
      icon: Lightbulb,
      title: 'Stay Positive',
      description: 'Maintain a growth mindset and learn from your mistakes'
    }
  ];

  return (
    <div className="container py-8 mx-auto px-4">
      {/* Dialog/Modal for inputting start date */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Set Your Preparation Start Date</DialogTitle>
            <DialogDescription>
              Let us know when you started preparing for the exam to track your progress effectively.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input 
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)} 
              placeholder="Select your start date" 
              className="w-full" 
            />
          </div>
          <DialogFooter>
            <Button onClick={handleStartDateSubmit}>Save Start Date</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <DashboardSidebar />
        <div className="space-y-8">
          <div>
            <Badge variant="secondary" className="mb-4">ESSLCE 2025</Badge>
            <h1 className="text-3xl font-bold mb-2 text-gradient">Your Exam Countdown</h1>
            <p className="text-muted-foreground">
              Stay motivated and prepared for June 22, 2025
            </p>
          </div>

          <Card className="p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {timeBlocks.map((block) => (
                <div key={block.label} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <block.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-1 tabular-nums">
                    {String(block.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {block.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Preparation Progress</h3>
              <Badge variant="outline">{Math.round(progress)}%</Badge>
            </div>
            <Progress value={progress} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Keep going! Every day of preparation counts
            </p>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Study Tips & Strategies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {studyTips.map((tip) => (
                <Card key={tip.title} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <tip.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{tip.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {tip.tag}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {wellnessTips.map((tip) => (
                <Card key={tip.title} className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shrink-0">
                      <tip.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
