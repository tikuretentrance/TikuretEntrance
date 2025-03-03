import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function FAQPage() {
    return (
        <div className="container px-4 py-8 mx-auto mt-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
                    <p className="text-muted-foreground">
                        Find answers to common questions about entrance exams and our platform
                    </p>
                </div>

                <div className="relative mb-8">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search for questions..." className="pl-9" />
                </div>

                <Tabs defaultValue="general" className="mb-12">
                    <TabsList className="grid grid-cols-4 mb-8">
                        <TabsTrigger value="general">General</TabsTrigger>
                        <TabsTrigger value="exams">Exams</TabsTrigger>
                        <TabsTrigger value="courses">Courses</TabsTrigger>
                        <TabsTrigger value="account">Account</TabsTrigger>
                    </TabsList>

                    <TabsContent value="general">
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">What is TikuretEntrance?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    TikuretEntrance is a comprehensive online platform designed specifically for Ethiopian students preparing for university entrance exams. We provide practice tests, study materials, courses, and personalized learning tools to help students achieve their academic goals.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">Is TikuretEntrance free to use?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    TikuretEntrance offers both free and premium content. Basic features like access to some practice questions and study materials are available for free. Premium features, including full practice exams, detailed explanations, and personalized study plans, require a subscription.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How do I get started with TikuretEntrance?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    To get started, simply create a free account by clicking the "Register" button. Once registered, you can access your dashboard, take practice tests, browse study materials, and track your progress. We recommend starting with a diagnostic test to identify your strengths and areas for improvement.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">What subjects are covered on TikuretEntrance?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    TikuretEntrance covers all subjects included in the Ethiopian University Entrance Examination, including Mathematics, Physics, Chemistry, Biology, English, Geography, History, and Civics. We provide resources for both Natural Science and Social Science streams.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How often is new content added?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    We regularly update our platform with new practice questions, exam papers, and study materials. New content is typically added weekly, with major updates following the release of new entrance exams or curriculum changes.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>

                    <TabsContent value="exams">
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">Are the practice exams similar to the real entrance exams?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    Yes, our practice exams are designed to closely mimic the format, difficulty level, and content of the actual Ethiopian University Entrance Examinations. Many of our practice tests include questions from previous years' exams, ensuring you're practicing with relevant material.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How are the practice exams scored?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    Practice exams are automatically scored upon completion. You'll receive an overall score, as well as a breakdown by subject and topic. For premium users, we also provide detailed performance analytics, comparing your results to other students and tracking your progress over time.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">Can I review my answers after completing an exam?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    Yes, after completing a practice exam, you can review all questions, see your answers, and view the correct answers with explanations. This review feature helps you understand your mistakes and learn from them.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How many practice exams are available?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    We currently offer over 50 full-length practice exams across all subjects and streams. This includes exams from previous years (2015-2024) and custom-created practice tests that target specific topics and difficulty levels.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">Are there time limits for the practice exams?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    Yes, our practice exams have time limits that match the real entrance exams. However, you can also choose to take untimed practice tests if you prefer to focus on understanding the material without time pressure.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>

                    <TabsContent value="courses">
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">What types of courses are available?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    We offer comprehensive courses for all subjects in the Ethiopian University Entrance Examination. Courses include video lessons, practice problems, quizzes, and study guides. We have both subject-specific courses (e.g., Mathematics, Physics) and integrated courses that cover multiple subjects.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How long do courses take to complete?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    Course duration varies depending on the subject and depth of coverage. Most subject-specific courses take 8-12 weeks to complete if you study consistently. However, you can progress at your own pace, and our platform tracks your progress so you can continue where you left off.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">Are the courses self-paced or scheduled?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    All our courses are self-paced, allowing you to study according to your own schedule. However, we do provide recommended study schedules and deadlines to help you stay on track, especially if you're preparing for an upcoming exam.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">Do I need to purchase textbooks for the courses?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    No, all necessary study materials are included in the courses. We provide digital textbooks, notes, and reference materials within the platform. However, we do recommend supplementing with the official Ethiopian Ministry of Education textbooks for comprehensive preparation.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">Can I interact with instructors during the courses?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    Premium users have access to our Q&A forums where they can ask questions and receive answers from our instructors. Additionally, we offer weekly live Q&A sessions for specific subjects where you can interact directly with our expert teachers.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>

                    <TabsContent value="account">
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How do I create an account?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    To create an account, click the "Register" button in the top right corner of the homepage. You'll need to provide your email address, create a password, and fill in some basic information about your educational background. The registration process takes less than 2 minutes.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How do I reset my password?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    If you've forgotten your password, click the "Login" button, then select "Forgot Password." Enter your email address, and we'll send you a link to reset your password. If you don't receive the email, check your spam folder or contact our support team.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">Can I use TikuretEntrance on mobile devices?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    Yes, TikuretEntrance is fully responsive and works on smartphones, tablets, and computers. We recommend using the latest version of Chrome, Firefox, Safari, or Edge for the best experience. We also have plans to release dedicated mobile apps in the future.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How do I upgrade to a premium account?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    To upgrade to a premium account, go to your dashboard and click on the "Upgrade" button. You'll see different subscription options with their respective features and prices. We offer monthly, quarterly, and annual plans, with discounts for longer commitments.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-medium py-4">How can I contact customer support?</AccordionTrigger>
                                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                                    You can contact our customer support team through the "Contact Us" page, by emailing support@tikuretentrance.com, or by using the live chat feature available on the bottom right of every page. Our support team is available Monday through Saturday, 9 AM to 6 PM EAT.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>
                </Tabs>

                <Card className="mb-12">
                    <CardHeader>
                        <CardTitle>Didn't find what you're looking for?</CardTitle>
                        <CardDescription>
                            Our support team is here to help with any questions you may have.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full sm:w-auto">Contact Support</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}