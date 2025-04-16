'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    CheckCircle2,
    Users,
    GraduationCap,
    BookOpen,
    Brain,
    Target,
    MessageSquare,
    Smartphone,
    Zap,
    Heart
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PricingSection() {
    const faqs = [
        {
            question: "Is this a one-time payment or monthly?",
            answer: "It's a one-time payment. Once you pay, you get full access until the end of the entrance exam period."
        },
        {
            question: "What if I can’t pay online?",
            answer: "You can pay via direct bank transfer or Telebirr. Just follow the instructions on the payment page."
        },
        {
            question: "Is the content really helpful for exams?",
            answer: "Yes! All materials are tailored for the national entrance exam. We work with top students and educators to ensure quality."
        }
    ];

    // const features = [
    //     "Access to all previous year entrance exams",
    //     "Smart study guides for every subject (Grade 9–12)",
    //     "Personalized planner & daily progress tracker",
    //     "Mock exams + step-by-step explanations",
    //     "Exam countdown & preparation insights",
    //     "Practice analytics: know what to improve",
    //     "Mobile-optimized experience, study anywhere",
    //     "24/7 support via WhatsApp and Telegram",
    //     "Join study groups & get peer support",
    //     "Priority access to future features & updates",
    //   ];


    const features = [
        "Access to all previous year entrance exams",
        "Comprehensive study materials for all subjects",
        "Personalized study planner and progress tracking",
        "Practice tests with detailed explanations",
        "Performance analytics and improvement insights",
        "Mobile-friendly learning experience",
        "24/7 support via WhatsApp and Telegram",
        "Regular updates with new content",
        "Exam countdown and progress tracking",
        "Exam preparation strategies and tips",
        "Study group access and peer support",
        "Priority access to new features",
        "Access to a library of educational resources",
        "Join an active community of students",
        "Daily practice questions and mock tests",
    ];

    return (
        <section className="py-16">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">Join Our Community</Badge>
                    <h2 className="text-4xl font-bold mb-4 text-gradient">
                        Become a TikuretEntrance Member
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of students preparing together for success. Get access to everything you need to ace your entrance exam.
                    </p>
                </div>

                <Card className="max-w-3xl mx-auto p-8 relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

                    <div className="relative">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Badge variant="secondary" className="text-sm">Special Student Offer</Badge>
                                <Badge variant="secondary" className="text-sm">Valid Until ESSLCE</Badge>
                            </div>
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <span className="text-2xl text-muted-foreground line-through">ETB 4,990</span>
                                <Badge variant="secondary" className="text-lg px-3 py-1">
                                    90% Scholarship
                                </Badge>
                            </div>
                            <div className="text-5xl font-bold text-gradient mb-2">
                                ETB 499
                            </div>
                            <p className="text-sm text-muted-foreground">
                                One-time membership fee • Full access until ESSLCE completion
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center space-y-4">
                            <Button asChild size="lg" className="w-full md:w-auto px-8">
                                <Link href="/payment" className="flex items-center gap-2">
                                    <GraduationCap className="h-5 w-5" />
                                    Join TikuretEntrance
                                </Link>
                            </Button>
                            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                                <Heart className="h-4 w-4 text-red-500" />
                                Join 10,000+ students preparing for success
                            </p>
                        </div>
                    </div>
                </Card>

                {/* Trust Indicators */}
                {/* <div className="max-w-3xl mx-auto mt-12">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
                            <div className="text-sm text-muted-foreground">Active Members</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-primary mb-1">95%</div>
                            <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                            <div className="text-sm text-muted-foreground">Support Available</div>
                        </div>
                    </div>
                </div> */}

                {/* FAQ Section */}
                <div className="max-w-2xl mx-auto mt-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="space-y-2">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`faq-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}