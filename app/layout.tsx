import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Webアプリ・iOSアプリ開発",
  description:
    "Claude Codeで爆速開発。WebアプリからiOSアプリまで、個人開発で複数のプロダクトをリリースした実績のあるフリーランスエンジニアのポートフォリオです。",
  openGraph: {
    title: "Portfolio | Webアプリ・iOSアプリ開発",
    description:
      "Claude Codeで爆速開発。WebアプリからiOSアプリまで、個人開発で複数のプロダクトをリリースした実績のあるフリーランスエンジニアのポートフォリオです。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Webアプリ・iOSアプリ開発",
    description:
      "Claude Codeで爆速開発。WebアプリからiOSアプリまで、個人開発で複数のプロダクトをリリースした実績のあるフリーランスエンジニアのポートフォリオです。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
