import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YK Digital Works — iOS / Webアプリ開発",
  description:
    "SwiftUIによるiOSアプリからNext.jsによるWebアプリまで、企画・設計・開発・ストア公開までを一人で手がけるフリーランスエンジニアのポートフォリオ。App Store公開5本を含む7本のプロダクトを個人開発でリリース。",
  openGraph: {
    title: "YK Digital Works — iOS / Webアプリ開発",
    description:
      "企画からApp Store公開まで。個人開発で7本のプロダクトをリリースしてきたフリーランスエンジニアのポートフォリオ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    site: "@YKDigitalWorks",
    creator: "@YKDigitalWorks",
    title: "YK Digital Works — iOS / Webアプリ開発",
    description:
      "企画からApp Store公開まで。個人開発で7本のプロダクトをリリースしてきたフリーランスエンジニアのポートフォリオ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} ${plexMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
