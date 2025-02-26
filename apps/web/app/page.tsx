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

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 mx-auto">
        <Hero />
        <Statistics />
        <FeaturesSection />
        <HowItWorks />
        <StudyMaterials />
        <CoursePreview />
        {/* <Testimonials /> */}
        <FAQ />
        <CTA />
      </div>
    </div>
  );
}