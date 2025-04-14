'use client';

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phoneNumber: '',
        message: ''
    });

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     try {
    //         await emailjs.send(
    //             process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    //             process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    //             formData,
    //             process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
    //         );

    //         toast.success("Message sent successfully! We'll get back to you soon.");
    //         setFormData({ name: '', email: '', subject: '', phoneNumber: "", message: '' });
    //     } catch (error) {
    //         toast.error("Failed to send the message. Please try again later.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            toast.success("Message sent successfully! We'll get back to you soon.");
            setFormData({ name: '', email: '', subject: '', phoneNumber: "", message: '' });
        } catch (error) {
            toast.error("Failed to send the message. Please try again later.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-gradient">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                    <div className="space-y-6">
                        <Card className="p-6">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-sm text-muted-foreground">info@tikuretentrance.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-sm text-muted-foreground">+251 912 018 482</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Address</h3>
                                        <p className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 bg-gradient-to-br from-primary/50 to-secondary/50">
                            <h3 className="font-semibold mb-2">Office Hours</h3>
                            <div className="space-y-2 text-sm">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 9:00 AM - 1:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        required
                                        placeholder="Your name"
                                        minLength={4}
                                        maxLength={50}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        // required
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phoneNumber" className="text-sm font-medium">
                                    Phone Number
                                </label>
                                <Input
                                    type="tel"
                                    id="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                                    required
                                    placeholder="Your phone number"
                                    pattern="(\+2519\d{8}|09\d{8})"
                                    title="Phone number must be in the format +251911234567 or 0911234567"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                    required
                                    placeholder="How can we help?"
                                    minLength={4}
                                    maxLength={80}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                    required
                                    placeholder="Your message..."
                                    className="min-h-[150px]"
                                    minLength={30}
                                    maxLength={500}
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}