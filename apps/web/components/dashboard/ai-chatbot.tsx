"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, X, Maximize2, Minimize2, HelpCircle } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function AIChatbot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi there! I'm your study assistant. How can I help with your exam preparation today?"
        }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: "user" as const, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        // TODO: Integrate with AI backend
        // For now, simulate a response
        setTimeout(() => {
            const responses = [
                "I can help you with that! Let me find some relevant study materials for you.",
                "That's a great question about calculus. The key concept to understand is that derivatives measure the rate of change.",
                "For entrance exam preparation, I recommend focusing on past papers and understanding the exam pattern.",
                "Physics problems often require applying multiple concepts. Let's break this down step by step.",
                "I've analyzed your practice test results, and it looks like you should focus more on organic chemistry."
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content: randomResponse
                }
            ]);
            setLoading(false);
        }, 1000);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setIsMinimized(false);
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    if (!isOpen) {
        return (
            <Button
                onClick={toggleChat}
                className="rounded-full h-14 w-14 shadow-lg gradient-primary"
                size="icon"
            >
                <Bot className="h-6 w-6 text-white" />
            </Button>
        );
    }

    return (
        <Card className={`shadow-lg transition-all duration-300 ${isMinimized
                ? "w-72 h-16"
                : "w-80 md:w-96 h-[500px]"
            }`}>
            <div className="p-3 border-b bg-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <h2 className="font-semibold">Study Assistant</h2>
                </div>
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" onClick={toggleMinimize} className="h-8 w-8">
                        {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {!isMinimized && (
                <>
                    <ScrollArea className="flex-1 p-4 h-[400px]">
                        <div className="space-y-4">
                            {messages.map((message, i) => (
                                <div
                                    key={i}
                                    className={`flex items-start gap-3 ${message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                                        }`}
                                >
                                    <div className={`rounded-full p-2 ${message.role === "assistant"
                                            ? "bg-primary/10"
                                            : "bg-secondary"
                                        }`}>
                                        {message.role === "assistant" ? (
                                            <Bot className="h-4 w-4" />
                                        ) : (
                                            <User className="h-4 w-4" />
                                        )}
                                    </div>
                                    <div className={`rounded-lg p-3 max-w-[80%] ${message.role === "assistant"
                                            ? "bg-background border"
                                            : "bg-primary text-primary-foreground"
                                        }`}>
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Bot className="h-4 w-4 animate-spin" />
                                    Thinking...
                                </div>
                            )}
                        </div>
                    </ScrollArea>

                    <form onSubmit={handleSubmit} className="p-3 border-t">
                        <div className="flex gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                disabled={loading}
                            />
                            <Button type="submit" size="icon" disabled={loading || !input.trim()}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </form>
                </>
            )}
        </Card>
    );
}