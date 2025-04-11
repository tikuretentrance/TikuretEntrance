'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
    const features = [
        "Access to all previous year entrance exams",
        "Comprehensive study materials for all subjects",
        "Personalized study planner and progress tracking",
        "Practice tests with detailed explanations",
        "Performance analytics and improvement insights",
        "Mobile-friendly learning experience",
        "24/7 support via WhatsApp and Telegram",
        "Regular updates with new content",
        "Exam countdown and preparation tips",
        "Study group access and peer support"
    ];

    return (
        <section className="py-16">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">Limited Time Offer</Badge>
                    <h2 className="text-4xl font-bold mb-4 text-gradient">
                        Complete Platform Access
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to ace your entrance exam in one comprehensive package
                    </p>
                </div>

                <Card className="max-w-3xl mx-auto p-8 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

                    <div className="relative">
                        {/* Price display */}
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <span className="text-2xl text-muted-foreground line-through">ETB 2,999</span>
                                <Badge variant="secondary" className="text-lg px-3 py-1">
                                    Save 67%
                                </Badge>
                            </div>
                            <div className="text-5xl font-bold text-gradient mb-2">
                                ETB 999
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Special price valid until ESSLCE exam completion
                            </p>
                        </div>

                        {/* Features list */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center space-y-4">
                            <Button asChild size="lg" className="w-full md:w-auto px-8">
                                <Link href="/payment" className="flex items-center gap-2">
                                    <Sparkles className="h-5 w-5" />
                                    Get Started Now
                                </Link>
                            </Button>
                            <p className="text-xs text-muted-foreground">
                                Regular pricing applies after entrance exam completion
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}