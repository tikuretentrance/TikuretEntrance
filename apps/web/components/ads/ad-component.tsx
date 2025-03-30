'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AdComponentProps {
    adSlot: string;
    adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
    className?: string;
}

export function AdComponent({ adSlot, adFormat = 'auto', className }: AdComponentProps) {
    useEffect(() => {
        try {
            // Push the ad only after component mounts
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.error('Error loading AdSense ad:', error);
        }
    }, []);

    return (
        <div className={cn('w-full rounded-lg', className)}> {/* bg-card */}
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT || ''}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive="true"
            />
        </div>
    );
}