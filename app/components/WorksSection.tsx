"use client";

import { useState } from "react";

type Platform = "iOS" | "Web";

type Work = {
  title: string;
  platform: Platform;
  category: string;
  description: string;
  url: string;
  tech: string[];
  linkLabel: string;
};

const works: Work[] = [
  {
    title: "AIチャットボット導入サービス",
    platform: "Web",
    category: "AIチャットボットSaaS",
    description:
      "医療機関・士業・EC・製造業など業種別にカスタマイズできるRAGベースのAIチャットボットSaaS。音声通話モードや有人エスカレーション、使用量に応じた管理画面まで備え、Stripeでのオンライン契約・課金導線までを一貫して構築した。",
    url: "https://portfolio-three-orcin-92.vercel.app/",
    tech: ["Next.js", "Claude API", "Supabase", "Stripe"],
    linkLabel: "サイトを見る",
  },
  {
    title: "Glowmi",
    platform: "iOS",
    category: "AIスキンケア記録",
    description:
      "朝晩のスキンケアを写真とメモで記録し、Claude AIが肌の状態を分析してアドバイスするアプリ。7日間・月間のグラフ表示、RevenueCatによるサブスクリプション課金、4言語対応。",
    url: "https://apps.apple.com/app/glowmi-ai%E8%82%8C%E8%A8%BA%E6%96%AD-%E5%B0%8F%E9%A1%94%E7%BF%92%E6%85%A3/id6763681880",
    tech: ["SwiftUI", "Claude API", "RevenueCat", "SwiftData"],
    linkLabel: "App Store",
  },
  {
    title: "めしろぐ",
    platform: "iOS",
    category: "食事ログ",
    description:
      "食事を写真に撮るだけで、AIがカロリーと食費を自動で記録。栄養バランスと家計をひとつのアプリで同時に管理できる。",
    url: "https://apps.apple.com/app/%E3%82%81%E3%81%97%E3%82%8D%E3%81%90/id6761912060",
    tech: ["SwiftUI", "Vision", "Core Data"],
    linkLabel: "App Store",
  },
  {
    title: "Gomidashi",
    platform: "iOS",
    category: "ゴミ出しリマインダー",
    description:
      "ゴミ収集日を曜日・週（毎週・第1〜4週）で登録し、今日出せるゴミをひと目で確認できる生活アプリ。",
    url: "https://apps.apple.com/jp/app/gomidashi/id6760887454",
    tech: ["SwiftUI", "SwiftData"],
    linkLabel: "App Store",
  },
  {
    title: "禁煙くん",
    platform: "iOS",
    category: "禁煙サポート",
    description:
      "銘柄ごとのタバコ価格を登録し、禁煙によって節約できた金額をリアルタイムに計算。お金の面から禁煙の継続を後押しする。",
    url: "https://apps.apple.com/jp/app/%E7%A6%81%E7%85%99%E3%81%8F%E3%82%93/id6760255111",
    tech: ["SwiftUI", "Google AdMob"],
    linkLabel: "App Store",
  },
  {
    title: "FaceNote",
    platform: "iOS",
    category: "商談・会議メモ",
    description:
      "名刺の画像とあわせて商談や会議のメモを管理。カレンダービューで過去の面談を振り返れる、ビジネスパーソン向けのメモアプリ。",
    url: "https://apps.apple.com/jp/app/facenote/id6760473491",
    tech: ["SwiftUI", "SwiftData", "PhotosUI"],
    linkLabel: "App Store",
  },
  {
    title: "影響力の法則",
    platform: "Web",
    category: "学習アプリ",
    description:
      "チャルディーニの6つの説得原則をインタラクティブに学べるWebアプリ。各原則の解説・演習・実践例を収録。",
    url: "https://cialdini-app.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    linkLabel: "サイトを見る",
  },
  {
    title: "ポイント最適化ダッシュボード",
    platform: "Web",
    category: "家計ツール",
    description:
      "各種ポイントの残高・交換レート・有効期限を一元管理し、最も得な使い方をダッシュボードで提案する。",
    url: "https://point-optimizer-one.vercel.app/dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    linkLabel: "サイトを見る",
  },
];

const tabs = ["すべて", "iOS", "Web"] as const;
type Tab = (typeof tabs)[number];

function WorkRow({ work, index }: { work: Work; index: number }) {
  return (
    <li className="border-t border-line">
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid gap-y-3 py-9 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-6"
      >
        <span className="font-mono text-sm text-muted pt-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-serif text-xl sm:text-2xl transition-colors group-hover:text-accent">
              {work.title}
            </h3>
            <span className="font-mono text-xs text-muted tracking-wide">
              {work.platform} — {work.category}
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-7 text-muted">
            {work.description}
          </p>
          <p className="mt-3 font-mono text-xs text-muted/80">
            {work.tech.join(" · ")}
          </p>
        </div>
        <span className="hidden sm:flex items-start pt-1 font-mono text-sm text-muted transition-all group-hover:text-accent group-hover:translate-x-1">
          {work.linkLabel} ↗
        </span>
        <span className="sm:hidden font-mono text-xs text-accent">
          {work.linkLabel} ↗
        </span>
      </a>
    </li>
  );
}

export default function WorksSection() {
  const [active, setActive] = useState<Tab>("すべて");
  const filtered =
    active === "すべて" ? works : works.filter((w) => w.platform === active);

  return (
    <section id="works" className="pb-24 scroll-mt-20">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <h2 className="font-serif text-2xl sm:text-3xl">制作実績</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Works
          </span>
        </div>
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              aria-pressed={active === tab}
              className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                active === tab
                  ? "text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <ul>
        {filtered.map((work, i) => (
          <WorkRow key={work.title} work={work} index={i} />
        ))}
      </ul>
    </section>
  );
}
