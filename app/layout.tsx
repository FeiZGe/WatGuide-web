import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Dockbar from "@/components/Dockbar";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ['400', '700'],
  style: 'normal',
});

export const metadata: Metadata = {
  title: "Wat Guide",
  description: "Introducing Wat Phra Pathom Chedi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${prompt.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Dockbar />
      </body>
    </html>
  );
}
