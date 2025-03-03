import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";

export default function CTA() {
    const { isSignedIn } = useAuth();
    return (
        <section className="py-16 text-center">
            <div className="gradient-primary rounded-lg p-8 md:p-12 shadow-soft">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Learning?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                    Join thousands of students preparing for university entrance exams.
                    Start your journey today!
                </p>
                {isSignedIn ? (
                    <Link href="/exams">
                        <Button size="lg" className="gradient-secondary hover-lift" variant="secondary">
                            Explore Exams
                        </Button>
                    </Link>
                ) : (
                    <Link href="/sign-up">
                        <Button size="lg" className="gradient-secondary hover-lift" variant="secondary">
                            Create Free Account
                        </Button>
                    </Link>
                )}
            </div>
        </section>
    )
}