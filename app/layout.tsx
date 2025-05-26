import type { Metadata } from "next";
import { 
  Cormorant_Garamond,
  Playfair_Display,
  Roboto_Slab,
  Merriweather,
  Lora,
  Crimson_Text,
  Source_Serif_4,
  PT_Serif,
  Libre_Baskerville,
  EB_Garamond,
  Anonymous_Pro
} from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "хсл щ",
  description: "Landing page with physics and animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${robotoSlab.variable} ${merriweather.variable} ${lora.variable} ${crimsonText.variable} ${sourceSerif4.variable} ${ptSerif.variable} ${libreBaskerville.variable} ${ebGaramond.variable} ${anonymousPro.variable}`}>
        {children}
      </body>
    </html>
  );
}
