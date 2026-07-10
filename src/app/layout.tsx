import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Cormorant_Infant } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const cormorant_infant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-navigation",
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
  return (
    <html lang="en" className={oswald.variable}>
      <body>{children}</body>
    </html>
  );
}
