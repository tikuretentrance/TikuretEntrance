'use client';

import { FullFooter } from "@/components/layout/full-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconMessagePlus } from "@tabler/icons-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function FeedbackPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        feedback: ''
    });

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     try {
    //         await emailjs.send(
    //             process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    //             process.env.NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID || '',
    //             formData,
    //             process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
    //         );
    //         toast.success("Feedback submitted successfully! Thank you for your input.");
    //         setFormData({ name: "", phoneNumber: "", feedback: "" });
    //     } catch (error) {
    //         toast.error("Failed to submit feedback. Please try again later.");
    //     }
    //     setLoading(false);
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit feedback');
            }

            toast.success("Feedback submitted successfully! Thank you for your input.");
            setFormData({ name: "", phoneNumber: "", feedback: "" });
        } catch (error) {
            toast.error("Failed to submit feedback. Please try again later.");
        }
        setLoading(false);
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                <DashboardSidebar />
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 text-gradient">Feedback</h1>
                        <p className="text-muted-foreground">
                            We appreciate your feedback! Please fill out the form below to share your thoughts and suggestions with us.
                        </p>
                    </div>
                    {/* <h1 className="text-3xl font-bold mb-6 text-gradient">We Value Your Feedback</h1> */}
                    <Card className="p-8 max-w-4xl">
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-lg text-muted-foreground mb-6">
                                <IconMessagePlus className="inline mr-2" size={16} />
                                Your feedback helps us improve our services.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            minLength={4}
                                            maxLength={50}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="number" className="block text-sm font-medium text-muted-foreground mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="number"
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            value={formData.phoneNumber}
                                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                            required
                                            pattern="(\+2519\d{8}|09\d{8})"
                                            title="Phone number must be in the format +251911234567 or 0911234567"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="feedback" className="block text-sm font-medium text-muted-foreground mb-2">
                                        Feedback
                                    </label>
                                    <textarea
                                        id="feedback"
                                        rows={4}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={formData.feedback}
                                        onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                                        required
                                        minLength={30}
                                        maxLength={500}
                                    />
                                </div>


                                <Button
                                    type="submit"
                                    disabled={loading}
                                >
                                    Submit Feedback
                                </Button>
                            </form>
                        </div>

                    </Card>
                </div>
            </div>
        </div>
    );
}