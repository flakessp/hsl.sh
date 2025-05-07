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
  title: 'hashslash — курсы по искусственному интеллекту и креативному программированию',
  description: 'Обучение искусственному интеллекту и креативному программированию на русском языке. Курсы и интенсивы для дизайнеров, предпринимателей и начинающих разработчиков.',
  keywords: ['искусственный интеллект', 'креативное программирование', 'курсы', 'онлайн-обучение', 'hashslash', 'hsl.sh', 'образование', 'AI', 'программирование', 'обучение', 'дизайн', 'стартап'],
  authors: [{ name: 'hashslash — образовательный проект' }],
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'hashslash — курсы по ИИ и креативному программированию',
    description: 'Обучение искусственному интеллекту и креативному программированию на русском языке. Курсы и интенсивы для дизайнеров, предпринимателей и начинающих разработчиков.',
    url: 'https://hsl.sh',
    siteName: 'hashslash',
    images: [
      {
        url: 'https://picsum.photos/1200/630',
        width: 1200,
        height: 630,
        alt: 'hashslash — курсы по ИИ и креативному программированию',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hashslash — курсы по ИИ и креативному программированию',
    description: 'Обучение искусственному интеллекту и креативному программированию на русском языке. Курсы и интенсивы для дизайнеров, предпринимателей и начинающих разработчиков.',
    site: '@hashslash',
    creator: '@hashslash',
    images: {
      url: 'https://picsum.photos/1200/630',
      alt: 'hashslash — курсы по ИИ и креативному программированию',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true }
  },
  alternates: {
    canonical: 'https://hsl.sh',
    languages: {
      'ru': 'https://hsl.sh',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            // Немедленное создание и установка фавиконки при загрузке
            const globes = ['🌍', '🌎', '🌏'];
            let currentIndex = 0;

            function updateFavicon() {
              const emoji = globes[currentIndex];
              const canvas = document.createElement('canvas');
              canvas.width = 32;
              canvas.height = 32;
              const ctx = canvas.getContext('2d');
              ctx.font = '28px serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(emoji, 16, 16);
              
              let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
              link.type = 'image/x-icon';
              link.rel = 'shortcut icon';
              link.href = canvas.toDataURL();
              document.getElementsByTagName('head')[0].appendChild(link);
              
              currentIndex = (currentIndex + 1) % globes.length;
            }

            // Первичная установка фавиконки
            updateFavicon();
            
            // Запуск анимации после загрузки документа
            document.addEventListener('DOMContentLoaded', function() {
              setInterval(updateFavicon, 1000);
            });
          })();
        ` }} />
      </head>
      <body className={`${ibmPlexMono.variable} ${pressStart2P.variable} font-mono bg-background text-foreground p-4 md:p-8`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",
          \"@type\": \"Organization\",
          \"name\": \"hashslash\",
          \"url\": \"https://hsl.sh\",
          \"logo\": \"https://hsl.sh/logo.png\",
          \"sameAs\": [\"https://t.me/hashslash\", \"https://twitter.com/hashslash\"]
        }` }} />
        {children}
      </body>
    </html>
  );
}
