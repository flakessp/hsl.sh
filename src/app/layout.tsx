
import type {Metadata} from 'next';
import {IBM_Plex_Mono, Press_Start_2P} from 'next/font/google';
import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-press-start-2p',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'hashslash - AI and Creative Coding Courses',
  description: 'Learn AI and creative coding with hashslash. Explore our courses and workshops designed for beginners and advanced learners.',
  keywords: ['AI', 'creative coding', 'courses', 'workshops', 'hashslash', 'hsl.sh', 'artificial intelligence', 'programming', 'education'],
  authors: [{ name: 'hashslash' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'hashslash - AI and Creative Coding Courses',
    description: 'Learn AI and creative coding with hashslash. Explore our courses and workshops designed for beginners and advanced learners.',
    url: 'https://hsl.sh',
    siteName: 'hashslash',
    images: [
      {
        url: 'https://picsum.photos/1200/630', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'hashslash AI and Creative Coding Courses',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hashslash - AI and Creative Coding Courses',
    description: 'Learn AI and creative coding with hashslash. Explore our courses and workshops designed for beginners and advanced learners.',
    site: '@hashslash', // Replace with your Twitter handle
    creator: '@hashslash', // Replace with your Twitter handle
    images: {
      url: 'https://picsum.photos/1200/630', // Replace with your actual Twitter Card image URL
      alt: 'hashslash AI and Creative Coding Courses',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 'large',
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${pressStart2P.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

