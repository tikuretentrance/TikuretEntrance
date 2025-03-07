"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Bell, FileText, BookOpen, AlertCircle } from "lucide-react";
import Link from "next/link";

interface Notification {
    id: string;
    title: string;
    type: "question" | "exam" | "note" | "announcement";
    date: string;
    isNew: boolean;
    link?: string;
}

const mockNotifications: Notification[] = [
    {
        id: "notif-1",
        title: "50 new Physics questions added",
        type: "question",
        date: "2025-03-18",
        isNew: true,
        link: "/dashboard/exam?subject=physics"
    },
    {
        id: "notif-2",
        title: "2024 Mathematics Entrance Exam available",
        type: "exam",
        date: "2025-03-15",
        isNew: true,
        link: "/dashboard/exam/natural-math-2024"
    },
    {
        id: "notif-3",
        title: "New study guide: Organic Chemistry Reactions",
        type: "note",
        date: "2025-03-10",
        isNew: false,
        link: "/dashboard/study-notes/note-3"
    },
    {
        id: "notif-4",
        title: "Important: Exam dates announced for 2025",
        type: "announcement",
        date: "2025-03-05",
        isNew: false
    }
];

export function NewContentNotifications() {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNotifications(mockNotifications);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        });
    };

    const getNotificationIcon = (type: Notification["type"]) => {
        switch (type) {
            case "question":
                return <FileText className="h-4 w-4 text-primary" />;
            case "exam":
                return <FileText className="h-4 w-4 text-primary" />;
            case "note":
                return <BookOpen className="h-4 w-4 text-primary" />;
            case "announcement":
                return <AlertCircle className="h-4 w-4 text-destructive" />;
        }
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-semibold">New Content</CardTitle>
                <Badge variant="secondary" className="flex items-center gap-1">
                    <Bell className="h-3 w-3" />
                    {notifications.filter(n => n.isNew).length} new
                </Badge>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-full" />
                    </div>
                ) : (
                    <Tabs defaultValue="all">
                        <TabsList className="grid grid-cols-4 mb-4">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="questions">Questions</TabsTrigger>
                            <TabsTrigger value="exams">Exams</TabsTrigger>
                            <TabsTrigger value="notes">Notes</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="space-y-4">
                            {notifications.map((notification) => (
                                <NotificationItem key={notification.id} notification={notification} />
                            ))}
                        </TabsContent>

                        <TabsContent value="questions" className="space-y-4">
                            {notifications
                                .filter((n) => n.type === "question")
                                .map((notification) => (
                                    <NotificationItem key={notification.id} notification={notification} />
                                ))}
                        </TabsContent>

                        <TabsContent value="exams" className="space-y-4">
                            {notifications
                                .filter((n) => n.type === "exam")
                                .map((notification) => (
                                    <NotificationItem key={notification.id} notification={notification} />
                                ))}
                        </TabsContent>

                        <TabsContent value="notes" className="space-y-4">
                            {notifications
                                .filter((n) => n.type === "note")
                                .map((notification) => (
                                    <NotificationItem key={notification.id} notification={notification} />
                                ))}
                        </TabsContent>
                    </Tabs>
                )}
            </CardContent>
        </Card>
    );

    function NotificationItem({ notification }: { notification: Notification }) {
        return (
            <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">{notification.title}</span>
                            {notification.isNew && <Badge variant="secondary">New</Badge>}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {formatDate(notification.date)}
                        </div>
                    </div>
                </div>
                {notification.link && (
                    <Button variant="ghost" size="sm" asChild>
                        <Link href={notification.link}>View</Link>
                    </Button>
                )}
            </div>
        );
    }
}