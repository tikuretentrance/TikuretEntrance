'use client';

import { Card } from "../ui/card";
import { Button } from "../ui/button";
// import Link from "next/link";
import { ArrowRight, BookOpen, FileText, GraduationCap } from "lucide-react";

export function StudyMaterials() {
    const materials = [
        {
            title: "Complete Grade 9-12 Curriculum",
            description: "Access the entire Ethiopian secondary school curriculum with detailed explanations and examples",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            stats: {
                subjects: "All Subjects",
                chapters: "Complete Coverage",
                resources: "1000+ Resources",
            },
        },
        {
            title: "Previous Year Exams",
            description: "Practice with actual entrance exams from the past 10 years with detailed solutions",
            image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            stats: {
                papers: "10+ Years",
                questions: "2000+ Questions",
                solutions: "Detailed Solutions",
            },
        },
        {
            title: "Study Materials & Guides",
            description: "Comprehensive study guides, notes, and practice materials for all subjects",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            stats: {
                guides: "50+ Study Guides",
                notes: "Complete Notes",
                materials: "500+ Resources",
            },
        },
    ];

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Comprehensive Study Resources</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to excel in your Grade 12 entrance exam - from complete curriculum to previous year papers
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {materials.map((material, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                            src={material.image}
                            alt={material.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{material.title}</h3>
                            <p className="text-muted-foreground mb-4">{material.description}</p>
                            <div className="grid grid-cols-1 gap-2 mb-6">
                                {Object.entries(material.stats).map(([key, value]) => (
                                    <div key={key} className="flex items-center gap-2">
                                        {key === 'subjects' && <BookOpen className="h-4 w-4" />}
                                        {key === 'papers' && <FileText className="h-4 w-4" />}
                                        {key === 'guides' && <GraduationCap className="h-4 w-4" />}
                                        <span className="text-sm font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                            {/* <Link href={`/materials/${material.title.toLowerCase().replace(/\s+/g, '-')}`}> */}
                                <Button className="w-full">
                                    Access Materials
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            {/* </Link> */}
                        </div>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-8">
                {/* <Link href="/materials"> */}
                    <Button size="lg" variant="outline">
                        View All Study Materials
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                {/* </Link> */}
            </div>
        </section>
    );
}