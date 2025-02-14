import { Card } from "@/components/ui/card";
import { BookOpen, Brain, GraduationCap, Target } from "lucide-react";


export function FeaturesSection() {
    const features = [
        {
            icon: <Brain className="w-10 h-10" />,
            title: "AI-Powered Learning",
            description:
                "Personalized study plans and recommendations based on your performance",
        },
        {
            icon: <Target className="w-10 h-10" />,
            title: "Practice Tests",
            description: "Comprehensive exam preparation with real-time feedback",
        },
        {
            icon: <BookOpen className="w-10 h-10" />,
            title: "Complete Curriculum",
            description: "Full coverage of grades 9-12 Ethiopian curriculum",
        },
        {
            icon: <GraduationCap className="w-10 h-10" />,
            title: "Track Progress",
            description: "Monitor your improvement with detailed analytics",
        },
    ];
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
                Why Choose TikuretEntrance?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <Card key={index} className="p-6 card-hover">
                        <div className="mb-4 text-primary">{feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}
