import { ArrowUpRight, Mail, Smartphone, Globe } from "lucide-react";

const CONTACT_EMAIL = "y.k199xtbma@gmail.com";

type Work = {
  title: string;
  description: string;
  url: string;
  tag: string;
  tech: string[];
};

const iosWorks: Work[] = [
  {
    title: "Glowmi — AIスキンケア記録",
    description:
      "朝晩のスキンケアを写真・メモで記録し、Claude AIが肌状態を分析してアドバイス。7日間・月間グラフ、RevenueCat課金、4言語対応。",
    url: "https://apps.apple.com/app/glowmi-ai%E8%82%8C%E8%A8%BA%E6%96%AD-%E5%B0%8F%E9%A1%94%E7%BF%92%E6%85%A3/id6763681880",
    tag: "iOSアプリ",
    tech: ["SwiftUI", "Claude API", "RevenueCat", "SwiftData"],
  },
  {
    title: "めしろぐ",
    description:
      "食事を写真に撮るだけでAIがカロリーと食費を自動記録。栄養バランスと家計を同時に管理できる食事ログアプリ。",
    url: "https://apps.apple.com/app/%E3%82%81%E3%81%97%E3%82%8D%E3%81%90/id6761912060",
    tag: "iOSアプリ",
    tech: ["SwiftUI", "Vision", "Core Data"],
  },
  {
    title: "Gomidashi",
    description:
      "ゴミ収集日を曜日・週指定（毎週・第1〜4週）で登録。今日出せるゴミを即確認できる生活便利アプリ。",
    url: "https://apps.apple.com/jp/app/gomidashi/id6760887454",
    tag: "iOSアプリ",
    tech: ["SwiftUI", "SwiftData"],
  },
  {
    title: "禁煙くん",
    description:
      "銘柄ごとの価格を登録し、禁煙で節約できる金額をリアルタイムで計算。禁煙継続をお金の面からサポート。",
    url: "https://apps.apple.com/jp/app/%E7%A6%81%E7%85%99%E3%81%8F%E3%82%93/id6760255111",
    tag: "iOSアプリ",
    tech: ["SwiftUI", "Google AdMob"],
  },
  {
    title: "FaceNote",
    description:
      "名刺画像付きで商談・会議メモを管理。カレンダービューで過去の面談を振り返れるビジネスパーソン向けメモアプリ。",
    url: "https://apps.apple.com/jp/app/facenote/id6760473491",
    tag: "iOSアプリ",
    tech: ["SwiftUI", "SwiftData", "PhotosUI"],
  },
];

const webWorks: Work[] = [
  {
    title: "影響力の法則 — チャルディーニ実践ガイド",
    description:
      "チャルディーニの6つの説得原則をインタラクティブに学べるWebアプリ。各原則の解説・演習・実践例を収録。",
    url: "https://cialdini-app.vercel.app/",
    tag: "Webアプリ",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "ポイント最適化ダッシュボード",
    description:
      "各種ポイントの残高・交換レート・有効期限を一元管理。最もお得な使い方をダッシュボードで提案するアプリ。",
    url: "https://point-optimizer-one.vercel.app/dashboard",
    tag: "Webアプリ",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const stats = [
  { value: "5", label: "App Store公開" },
  { value: "7", label: "リリース済みアプリ" },
  { value: "4", label: "対応言語（多言語）" },
];

function WorkCard({ work }: { work: Work }) {
  const isAppStore = work.url.includes("apps.apple.com");
  return (
    <div className="card-hover flex flex-col bg-[#161616] rounded-2xl p-6 border border-white/5">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-violet-500/15 text-violet-300 border border-violet-500/20">
          {work.tag}
        </span>
      </div>
      <h3 className="text-lg font-bold mb-3 leading-snug">{work.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {work.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {work.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
      >
        {isAppStore ? "App Storeで見る" : "デモを見る"}
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#161616] rounded-2xl p-6 border border-white/5">
      <h3 className="font-bold mb-4 text-gray-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-transparent to-indigo-950/20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-300">
            <Smartphone size={14} />
            iOS / Webエンジニア
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            アプリを作り、
            <br />
            <span className="text-gradient">App Storeに届ける。</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
            iOSアプリ・Webアプリを個人開発でリリースしてきたフリーランスエンジニアです。
            <br className="hidden sm:block" />
            SwiftUI から Next.js まで、企画から公開まで一気通貫で対応します。
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg"
          >
            <Mail size={20} />
            無料で相談する
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 bg-[#111111] border-y border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl sm:text-5xl font-bold text-gradient mb-1">
                {s.value}
              </p>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Works */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          制作実績
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          個人開発でリリースしたプロダクト
        </p>

        {/* iOS */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-8 text-gray-300 flex items-center gap-3">
            <Smartphone size={18} className="text-violet-400" />
            iOSアプリ — App Store公開中
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {iosWorks.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>

        {/* Web */}
        <div>
          <h3 className="text-lg font-semibold mb-8 text-gray-300 flex items-center gap-3">
            <Globe size={18} className="text-violet-400" />
            Webアプリ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {webWorks.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            技術スタック
          </h2>
          <p className="text-gray-400 text-center mb-14 text-lg">
            企画から App Store 公開まで一人で完結
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SkillCard
              title="iOSアプリ開発"
              items={["SwiftUI", "SwiftData", "XcodeGen", "RevenueCat", "Google AdMob", "SPM"]}
            />
            <SkillCard
              title="Webアプリ開発"
              items={["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel", "Supabase"]}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">お問い合わせ</h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          アプリ開発のご依頼・ご相談はお気軽にどうぞ。
          <br />
          アイデアの段階から一緒に考えます。
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg"
        >
          <Mail size={20} />
          {CONTACT_EMAIL}
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Yoshimichi. All rights reserved.
      </footer>
    </main>
  );
}
