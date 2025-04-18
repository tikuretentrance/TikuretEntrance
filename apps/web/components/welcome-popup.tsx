'use client';

import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

export function WelcomePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('welcomePopupSeen');
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem('welcomePopupSeen', 'true');
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                        Welcome to TikuretEntrance
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                    <div className="text-center space-y-2">
                        <Badge variant="secondary" className="mb-1">Limited Time Offer</Badge>
                        <p className="text-lg font-semibold">
                            One-time access till the national exam.
                        </p>
                        <p className="text-3xl font-bold text-gradient">
                            ETB 499
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Full access. One-time. All materials. No subscription.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Button className="w-full" asChild>
                            <Link href="/membership">
                                Get Started Now
                            </Link>
                        </Button>
                        <Button variant="outline" className="w-full" onClick={handleClose}>
                            Maybe Later
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}