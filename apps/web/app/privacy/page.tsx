'use client';

import { Card } from "@/components/ui/card";
import { IconCalendar } from "@tabler/icons-react";

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gradient">Privacy Policy</h1>
                <Card className="p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground mb-6">
                            <IconCalendar className="inline mr-2" size={16} />
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                            <p className="text-muted-foreground mb-4">
                                TikuretEntrance is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Account information (name, email, educational background)</li>
                                <li>Study progress and performance data</li>
                                <li>Usage information and analytics</li>
                                <li>Device and browser information</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>To provide and improve our educational services</li>
                                <li>To personalize your learning experience</li>
                                <li>To communicate with you about your account and updates</li>
                                <li>To analyze and improve our platform's performance</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                            <p className="text-muted-foreground">
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                            </p>
                        </section>
                    </div>
                </Card>
            </div>
        </div>
    );
}