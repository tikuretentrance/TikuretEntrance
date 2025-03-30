'use client';

import CTA from "@/components/landing/cta";
import { FeaturesSection } from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import { Statistics } from "@/components/landing/statistics";
import { Testimonials } from "@/components/landing/testimonials";
import { CoursePreview } from "@/components/landing/course-preview";
import { FAQ } from "@/components/landing/faq";
import { HowItWorks } from "@/components/landing/how-it-works";
import { StudyMaterials } from "@/components/landing/study-materials";
import { Card } from "@/components/ui/card";
import { BookMarked, BookOpen, Brain, Clock, GraduationCap, HelpCircle, Link, Target } from "lucide-react";
import { ExamUpdates } from "@/components/landing/exam-updates";
import { FullFooter } from "@/components/layout/full-footer";
import { AdComponent } from "@/components/ads/ad-component";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 mx-auto flex-grow">
        <Hero />

        {/* Features Section
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Why Choose TikuretEntrance?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Brain className="w-10 h-10" />}
              title="AI-Powered Learning"
              description="Personalized study plans and recommendations based on your performance"
            />
            <FeatureCard
              icon={<Target className="w-10 h-10" />}
              title="Practice Tests"
              description="Comprehensive exam preparation with real-time feedback"
            />
            <FeatureCard
              icon={<BookOpen className="w-10 h-10" />}
              title="Complete Curriculum"
              description="Full coverage of grades 9-12 Ethiopian curriculum"
            />
            <FeatureCard
              icon={<GraduationCap className="w-10 h-10" />}
              title="Track Progress"
              description="Monitor your improvement with detailed analytics"
            />
          </div>
        </section> */}


        <Statistics />
        <FeaturesSection />
        {/* <HowItWorks /> */}
        <StudyMaterials />
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
            Latest Exam Updates
          </h2>
          <ExamUpdates />
        </section>
        {/* <CoursePreview /> */}
        {/* <Testimonials /> */}
        <FAQ />
        <CTA />
        <FullFooter />
      </div>
    </div>
  );
}

// function FeatureCard({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <Card className="p-6 card-hover">
//       <div className="mb-4 text-primary">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-muted-foreground">{description}</p>
//     </Card>
//   );
// }