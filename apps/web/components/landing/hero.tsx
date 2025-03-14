'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    const { isSignedIn } = useAuth();

    const benefits = [
        "Complete Grade 9-12 curriculum coverage",
        "Previous year entrance exams",
        "AI-powered personalized learning",
        "Comprehensive study materials and guides",
        "Regular mock tests and assessments",
        "Track your progress in real-time"
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
                        Master Your Grade 12 Entrance Exam
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Get everything you need to excel in your entrance exam - complete curriculum materials, previous year papers, comprehensive study guides, and regular assessments all in one place.
                    </p>
                    <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                        {isSignedIn ? (
                            <Link href="/dashboard">
                                <Button size="lg" className="shadow-lg hover:shadow-primary/25 button-gradient">
                                    Go to Dashboard
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        ) : (
                            <Link href="/sign-up">
                                <Button size="lg" className="button-gradient">
                                    Start Preparing Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        )}
                        <Link href="/books">
                            <Button size="lg" variant="outline">
                                Browse Books
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="relative w-full h-full max-h-[500px] min-h-[300px]">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="Study materials and books"
                        className="rounded-lg shadow-2xl w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg" />
                </div>
            </div>
        </section>
    );
}