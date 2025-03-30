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

// export const metadata: Metadata = {
//   title: 'TikuretEntrance - Ethiopian University Entrance Exam Preparation',
//   description: 'Personalized learning platform for Ethiopian high school students preparing for university entrance exams',
//   other: {
//     'google-adsense-account': `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''}`,
//   },
// };


export const metadata: Metadata = {
  metadataBase: new URL('https://tikuretentrance.com'),
  title: {
    template: '%s | TikuretEntrance',
    default: 'TikuretEntrance - #1 Ethiopian Secondary School Leaving Examination Preparation Platform'
  },
  description: 'The leading online platform for Ethiopian Grade 12 students preparing for ESSLCE (Ethiopian Secondary School Leaving Certificate Examination). Get access to past papers, personalized study plans, and expert guidance.',
  other: {
    'google-adsense-account': `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''}`,
  },
  keywords: [
    'ESSLCE preparation',
    'Ethiopian Secondary School Leaving Certificate Examination',
    'Grade 12 exam prep Ethiopia',
    'Ethiopian university entrance exam',
    'ESSLCE practice tests',
    'Ethiopian education',
    'Grade 12 study materials Ethiopia',
    'Ethiopian exam preparation',
    'Online exam practice Ethiopia',
    'Ethiopian student resources'
  ],
  authors: [{ name: 'TikuretEntrance Team || Dagim Wallelgne' }],
  creator: 'TikuretEntrance',
  publisher: 'TikuretEntrance',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tikuretentrance.com',
    title: 'TikuretEntrance - #1 Ethiopian Secondary School Leaving Examination Preparation Platform',
    description: 'The leading online platform for Ethiopian Grade 12 students preparing for ESSLCE. Get access to past papers, personalized study plans, books, notes, formulas and expert guidance.',
    siteName: 'TikuretEntrance',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TikuretEntrance - ESSLCE Preparation Platform'
      }
    ]
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'TikuretEntrance - #1 ESSLCE Preparation Platform',
  //   description: 'The leading online platform for Ethiopian Grade 12 students preparing for ESSLCE. Get access to past papers, personalized study plans, and expert guidance.',
  //   images: ['/twitter-image.png'],
  //   creator: '@tikuretentrance'
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'google-verification-code',
    other: {
      'google-adsense-account': `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''}`,
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://tikuretentrance.com'
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* favicon links for different platforms and sizes */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/*  Google Adsense */}
        <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personalized learning platform for Ethiopian high school students preparing for university entrance exams" />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''}`}
          crossOrigin="anonymous"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="TikuretEntrance -  #1 Ethiopian University Entrance Exam Preparation" />
        <meta property="og:description" content="Personalized learning platform for Ethiopian high school students preparing for university entrance exams" />
        <meta property="og:image" content="https://tikuretentrance.com/favicon.ico" />
        <meta property="og:url" content="https://tikuretentrance.com" />
        <meta property="og:type" content="website" />

        {/* Schema Markup  */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "TikuretEntrance",
            "url": "https://tikuretentrance.com",
            "logo": "https://tikuretentrance.com/favicon.ico",
          })}
        </script>
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      </body>
    </html>
  );
}