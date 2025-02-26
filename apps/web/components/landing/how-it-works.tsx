'use client';

import { Card } from "../ui/card";
import { ClipboardList, BookOpen, Target, Award } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: <ClipboardList className="h-8 w-8" />,
            title: "Take Assessment",
            description: "Complete our diagnostic test to identify your strengths and areas for improvement",
        },
        {
            icon: <BookOpen className="h-8 w-8" />,
            title: "Personalized Plan",
            description: "Receive a customized study plan tailored to your goals and current level",
        },
        {
            icon: <Target className="h-8 w-8" />,
            title: "Practice & Learn",
            description: "Access comprehensive study materials and practice with real exam questions",
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: "Track Progress",
            description: "Monitor your improvement and adjust your study plan for optimal results",
        },
    ];

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gradient">How TikuretEntrance Works</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Our proven four-step process helps you achieve your university entrance goals effectively
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <Card key={index} className="p-6 relative card-hover">
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                        </div>
                        <div className="mb-4 text-primary">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}