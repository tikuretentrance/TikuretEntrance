'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function ExamCountdownBanner() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const bannerHidden = localStorage.getItem('examBannerHidden');
        if (bannerHidden) {
            setIsVisible(false);
        }
    }, []);

    const hideBanner = () => {
        localStorage.setItem('examBannerHidden', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="bg-primary/10 border-b">
            <div className="container mx-auto px-4 py-3 relative">
                <div className="flex items-center justify-center gap-2 text-sm md:text-base">
                    <span className="font-semibold">🚨 Only {Math.max(
                        Math.ceil(
                            (new Date("2025-06-22T00:00:00Z").getTime() -
                                new Date().setUTCHours(0, 0, 0, 0)) /
                            (1000 * 3600 * 24)
                        ),
                        0
                    )} days left until the ESSLCE 2025!</span>

                    <Button variant="link" className="text-primary p-0 h-auto" asChild>
                        <a href="/membership">Get Full Access Now</a>
                    </Button>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={hideBanner}
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}