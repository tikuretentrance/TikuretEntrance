'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    const { isSignedIn } = useAuth();

    const benefits = [
        "Comprehensive exam preparation",
        "AI-powered personalized learning",
        "Expert-crafted study materials",
        "Track your progress in real-time"
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
                        Your Journey to University Excellence Starts Here
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Join thousands of students achieving their dreams with Ethiopia's leading university entrance exam preparation platform. Get personalized learning paths, real-time feedback, and comprehensive study materials.
                    </p>
                    <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <CheckCircle2 className="text-primary h-5 w-5" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4">
                        {isSignedIn ? (
                            <Link href="/dashboard">
                                <Button size="lg" className="shadow-lg hover:shadow-primary/25 button-gradient">
                                    Go to Dashboard
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        ) : (
                            <Link href="/sign-in">
                                <Button size="lg" className="button-gradient">
                                    Start Your Journey
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        )}
                        <Link href="/courses">
                            <Button size="lg" variant="outline">
                                Browse Courses
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="Students studying"
                        className="rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg" />
                </div>
            </div>
        </section>
    );
}