import Header from "@/components/Header";
import { DefaultSeo } from "next-seo";

import SEO from "@/next-seo.config";

import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: "Janderson Vilas Boas",
  description: 'Portfólio de Janderson Vilas Boas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <DefaultSeo {...SEO} />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
