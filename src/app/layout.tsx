import type { Metadata } from "next";
import "./globals.css";
import {
  Cormorant_Garamond,
  Cormorant_Infant,
  Inter,
  Oswald,
} from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});

const cormorant_infant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-infant",
});

export const metadata: Metadata = {
  title: "Astrid Portfolio",
  description: "Portfolio by Astrid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = [
    oswald.variable,
    inter.variable,
    cormorant_garamond.variable,
    cormorant_infant.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
