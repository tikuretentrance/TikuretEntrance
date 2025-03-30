'use client';

import { Card } from "@/components/ui/card";

export default function CookiesPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gradient">Cookie Policy</h1>
                <Card className="p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground mb-6">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">What Are Cookies?</h2>
                            <p className="text-muted-foreground mb-4">
                                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and study progress.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">How We Use Cookies</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>To keep you signed in to your account</li>
                                <li>To remember your study preferences</li>
                                <li>To analyze how our platform is used</li>
                                <li>To improve our services based on your usage</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Types of Cookies We Use</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Essential cookies for basic functionality</li>
                                <li>Performance cookies for analytics</li>
                                <li>Functionality cookies for personalization</li>
                                <li>Targeting cookies for relevant content</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Managing Cookies</h2>
                            <p className="text-muted-foreground">
                                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                            </p>
                        </section>
                    </div>
                </Card>
            </div>
        </div>
    );
}