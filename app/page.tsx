import CTA from "@/components/landing/cta";
import { FeaturesSection } from "@/components/landing/features";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <Hero />
      <FeaturesSection />
      <CTA />
    </div>
  );
}