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
      <body className={`${ibmPlexMono.variable} ${pressStart2P.variable} font-mono bg-background text-foreground p-4 md:p-8`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",
          \"@type\": \"Organization\",
          \"name\": \"hashslash\",
          \"url\": \"https://hsl.sh\",
          \"logo\": \"https://hsl.sh/logo.png\",
          \"sameAs\": [\"https://t.me/hashslash\", \"https://twitter.com/hashslash\"]
        }` }} />
        <script dangerouslySetInnerHTML={{__html: `
(() => {
  const emojis = ["🌍", "🌎", "🌏"];
  let currentEmojiIndex = 0;
  const intervalStorageKey = '__animatedGlobeFaviconInterval';

  const renderFavicon = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.font = "56px serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Adjust y for better vertical centering of emojis, a little trial and error might be needed for perfect alignment
    context.fillText(emojis[currentEmojiIndex], canvas.width / 2, canvas.height / 2 + 4);

    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = canvas.toDataURL();
  };

  const tick = () => {
    currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
    renderFavicon();
  };

  if (window[intervalStorageKey]) {
    clearInterval(window[intervalStorageKey]);
  }

  renderFavicon(); // Set initial favicon
  window[intervalStorageKey] = setInterval(tick, 1000);
})();
        `}} />
        {children}
      </body>
    </html>
  );
}
