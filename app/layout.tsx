import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "和太鼓早春の陣 -SousyunnoJin-",
  description: "和太鼓早春の陣 ホームページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
        <meta name="google-site-verification" content="2jyt-F18jfOVEsY_lvjz5MGUR7LsfwGm8JzqcFk8j2E" />
    </html>
  );
}
