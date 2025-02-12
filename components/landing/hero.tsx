import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
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
                <Button size="lg" asChild>
                    <Link href="/register">Start Learning Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/courses">Explore Courses</Link>
                </Button>
            </div>
        </section>
    )
}