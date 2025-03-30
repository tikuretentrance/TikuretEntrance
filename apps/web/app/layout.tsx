import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TikuretEntrance - Ethiopian University Entrance Exam Preparation',
  description: 'Personalized learning platform for Ethiopian high school students preparing for university entrance exams',
  other: {
    'google-adsense-account': `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personalized learning platform for Ethiopian high school students preparing for university entrance exams" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6171510629884386"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen bg-background">
            {children}
          </main>
        </Providers>
        <SpeedInsights />
        <Toaster richColors position="bottom-right" />
        <Analytics />
        <GoogleAnalytics gaId="G-XMGYQ6KSNS" />
      </body>
    </html>
  );
}