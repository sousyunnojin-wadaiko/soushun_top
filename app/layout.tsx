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
  title: "和太鼓 早春の陣 | 公式サイト -SousyunnoJin-",
  description: "和太鼓 早春の陣 公式ホームページ。悠久太鼓愛好会つるかめ会と輪太鼓衆転太鼓舞（てんてこまい）が中心に開催する和太鼓演奏会です。開催概要やお知らせ、歴史を紹介しています。",
  icons: {
    icon: "/favicon.ico",
  },
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
