import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, GraduationCap, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Path to University Success
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Prepare for Ethiopian university entrance exams with personalized
          learning, AI-powered feedback, and comprehensive study materials.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/register">Start Learning Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
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
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students preparing for university entrance exams.
            Start your journey today!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">Create Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}