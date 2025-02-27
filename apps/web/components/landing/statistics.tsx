'use client';

import { Card } from "../ui/card";
import { Users, BookOpen, Trophy, School } from "lucide-react";

export function Statistics() {
    const stats = [
        {
            icon: <Users className="h-6 w-6" />,
            value: "10,000+",
            label: "Active Students",
        },
        {
            icon: <BookOpen className="h-6 w-6" />,
            value: "1,000+",
            label: "Practice Questions",
        },
        {
            icon: <Trophy className="h-6 w-6" />,
            value: "95%",
            label: "Success Rate",
        },
        {
            icon: <School className="h-6 w-6" />,
            value: "10+",
            label: "Partner Schools",
        },
    ];

    return (
        <section className="py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                            {stat.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                        <p className="text-muted-foreground">{stat.label}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}