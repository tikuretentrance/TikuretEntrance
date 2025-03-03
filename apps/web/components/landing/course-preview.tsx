'use client';

import { Card } from "../ui/card";
import { Button } from "../ui/button";
// import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react";

export function CoursePreview() {
    const courses = [
        {
            title: "Mathematics",
            description: "Master essential math concepts for university entrance exams",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            stats: {
                lessons: "50+ Lessons",
                duration: "40 Hours",
                students: "2000+ Students",
            },
        },
        {
            title: "Physics",
            description: "Comprehensive physics preparation with practical examples",
            image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            stats: {
                lessons: "45+ Lessons",
                duration: "35 Hours",
                students: "1800+ Students",
            },
        },
        {
            title: "Chemistry",
            description: "In-depth chemistry concepts with interactive learning",
            image: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            stats: {
                lessons: "40+ Lessons",
                duration: "30 Hours",
                students: "1500+ Students",
            },
        },
    ];

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gradient">Featured Courses</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explore our comprehensive course library designed to help you excel in your university entrance exams
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                            <p className="text-muted-foreground mb-4">{course.description}</p>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" />
                                    <span className="text-sm">{course.stats.lessons}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span className="text-sm">{course.stats.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    <span className="text-sm">{course.stats.students}</span>
                                </div>
                            </div>
                            {/* <Link href={`/courses/${course.title.toLowerCase()}`}> */}
                                <Button className="w-full">
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            {/* </Link> */}
                        </div>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-8">
                {/* <Link href="/courses"> */}
                    <Button size="lg" variant="outline">
                        View All Courses
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                {/* </Link> */}
            </div>
        </section>
    );
}