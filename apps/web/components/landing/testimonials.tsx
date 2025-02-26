'use client';

import { Card } from "../ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Kidus Abebe",
            role: "Medical Student at AAU",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            content: "TikuretEntrance helped me achieve my dream of getting into medical school. The personalized study plans and practice tests were invaluable.",
        },
        {
            name: "Sara Tekle",
            role: "Engineering Student at AAiT",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            content: "The AI-powered feedback system helped me identify and improve my weak areas. I couldn't have scored as high without this platform.",
        },
        {
            name: "Yonas Kebede",
            role: "Law Student at AAU",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            content: "The comprehensive study materials and practice questions were exactly what I needed. The platform made my preparation journey much easier.",
        },
    ];

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Join thousands of successful students who achieved their university dreams with TikuretEntrance
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold">{testimonial.name}</h3>
                                <p className="text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                            ))}
                        </div>
                        <p className="text-muted-foreground">{testimonial.content}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}