'use client';

import { FullFooter } from "@/components/layout/full-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconMessagePlus } from "@tabler/icons-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

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
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, {
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
        <><div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gradient">We Value Your Feedback</h1>
                <Card className="p-8">
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
        </div><FullFooter /></>
    );
}