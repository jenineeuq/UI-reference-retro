import type { Metadata } from "next";
import { VT323, Press_Start_2P } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "UI Reference - Retro Style Components",
  description: "A comprehensive UI component library in classic retro style",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${vt323.variable} ${pressStart.variable} font-mono`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
