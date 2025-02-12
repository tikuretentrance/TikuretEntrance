import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
    return (
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
    )
}