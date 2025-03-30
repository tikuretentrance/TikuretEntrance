'use client';

import { Card } from "@/components/ui/card";
import { IconCalendar } from "@tabler/icons-react";

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gradient">Terms of Service</h1>
                <Card className="p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground mb-6">
                            <IconCalendar className="inline mr-2" size={16} />
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground mb-4">
                                By accessing and using TikuretEntrance, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">2. User Accounts</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>You must provide accurate and complete information when creating an account</li>
                                <li>You are responsible for maintaining the security of your account</li>
                                <li>You must not share your account credentials with others</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">3. Educational Content</h2>
                            <p className="text-muted-foreground mb-4">
                                All educational content provided on TikuretEntrance is for personal, non-commercial use only. You may not reproduce, distribute, or modify any content without our explicit permission.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">4. User Conduct</h2>
                            <p className="text-muted-foreground">
                                Users must not engage in any activity that disrupts or interferes with the platform's functionality or other users' experience.
                            </p>
                        </section>
                    </div>
                </Card>
            </div>
        </div>
    );
}