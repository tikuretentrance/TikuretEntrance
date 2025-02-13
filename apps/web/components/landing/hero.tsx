'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const { isSignedIn } = useAuth();
    return (
        <section className="py-12 md:py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Path to University Success
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Prepare for Ethiopian university entrance exams with personalized
                learning, AI-powered feedback, and comprehensive study materials.
            </p>
            <div className="flex gap-4 justify-center">
                {isSignedIn ? (
                    <Link href="/dashboard">
                        <Button size="lg" className="shadow-lg hover:shadow-primary/25">
                            Go to Dashboard
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>

                ) : (
                    <Button size="lg" asChild>
                        <Link href="/sign-in">Start Learning Now</Link>
                    </Button>
                )}
                <Button size="lg" variant="outline" asChild>
                    <Link href="/courses">Explore Courses</Link>
                </Button>
            </div>
        </section>
    )
}