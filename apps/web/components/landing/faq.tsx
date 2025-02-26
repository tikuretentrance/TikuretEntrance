'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            question: "How does TikuretEntrance prepare me for university entrance exams?",
            answer: "TikuretEntrance provides comprehensive preparation through personalized study plans, AI-powered assessments, practice tests, and detailed performance analytics. Our platform covers the entire Ethiopian curriculum and is regularly updated to match the latest exam patterns.",
        },
        {
            question: "What subjects are covered in the courses?",
            answer: "We cover all major subjects required for Ethiopian university entrance exams, including Mathematics, Physics, Chemistry, Biology, English, and Civics. Each subject includes comprehensive study materials, practice questions, and mock tests.",
        },
        {
            question: "How long do I need to prepare for the entrance exam?",
            answer: "The preparation time varies depending on your current knowledge level and target score. We recommend starting at least 6 months before the exam. Our diagnostic tests will help create a personalized study schedule based on your needs.",
        },
        {
            question: "Can I access the platform on mobile devices?",
            answer: "Yes, TikuretEntrance is fully responsive and can be accessed on any device - smartphones, tablets, or computers. You can study anywhere, anytime, making it convenient to maintain a consistent study routine.",
        },
        {
            question: "What makes TikuretEntrance different from other platforms?",
            answer: "Our platform stands out with its AI-powered personalization, comprehensive Ethiopian curriculum alignment, real-time performance tracking, and proven success rate. We also provide regular updates and support from experienced educators.",
        },
    ];

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Find answers to common questions about our platform and preparation process
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}