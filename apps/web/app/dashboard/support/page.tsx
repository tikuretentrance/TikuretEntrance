'use client';

import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function HelpPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                <DashboardSidebar />
                {/* <div className="max-w-4xl mx-auto"> */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 text-gradient">Help Center</h1>
                        <p className="text-muted-foreground">
                            Find answers to common questions, explore support options, and access helpful resources for a smooth experience.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Quick Support Options</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                                    <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <h3 className="font-medium mb-2">Phone Support</h3>
                                    <p className="text-sm text-muted-foreground mb  -4">Available 9 AM - 6 PM EAT</p>
                                    <Button variant="outline" className="mt-4 w-full" asChild>
                                        <a href="tel:+251912018482">+251 912 018 482</a>
                                    </Button>
                                </Card>

                                <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                                    <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <h3 className="font-medium mb-2">Email Support</h3>
                                    <p className="text-sm text-muted-foreground mb-4">24/7 Response</p>
                                    <Button variant="outline" className="w-full" asChild>
                                        <a href="mailto:support@tikuretentrance.com">
                                            support@tikuretentrance.com
                                        </a>
                                    </Button>
                                </Card>

                                {/* <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-medium mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">Instant Support</p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </Card> */}

                                <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                                    <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <h3 className="font-medium mb-2">Community Forum</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Get help from other users</p>
                                    <Button variant="outline" className="w-full" asChild>
                                        <a target="_blank" href="https://t.me/tikuretentrance">Visit Forum</a>
                                    </Button>
                                </Card>
                                {/* <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <IconMicrophone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-medium mb-2">We Value Your Feedback</h3>
                <p className="text-sm text-muted-foreground mb-4">Help us improve our service</p>
                <Button variant="outline" className="w-full">
                  Give Feedback
                </Button>
              </Card> */}

                            </div>
                        </Card>

                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                                    <AccordionContent>
                                        Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>How can I track my progress?</AccordionTrigger>
                                    <AccordionContent>
                                        Visit your dashboard to see detailed analytics of your study progress, test scores (ESSLCE), and areas for improvement.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can I access the platform on mobile?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, TikuretEntrance is fully responsive and works on all devices including smartphones and tablets.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </Card>

                        <Card className="p-6 text-center">
                            <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
                            <p className="text-muted-foreground mb-6">
                                Our support team is always ready to assist you with any questions or concerns.
                            </p>
                            <Button asChild size="lg">
                                <Link href="/contact">Contact Support</Link>
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}