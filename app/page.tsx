const CONTACT_EMAIL = "y.k199xtbma@gmail.com";
const X_URL = "https://x.com/YKDigitalWorks";

type Work = {
  title: string;
  category: string;
  description: string;
  url: string;
  tech: string[];
  linkLabel: string;
};

const works: Work[] = [
  {
    title: "Glowmi",
    category: "iOS — AIスキンケア記録",
    description:
      "朝晩のスキンケアを写真とメモで記録し、Claude AIが肌の状態を分析してアドバイスするアプリ。7日間・月間のグラフ表示、RevenueCatによるサブスクリプション課金、4言語対応。",
    url: "https://apps.apple.com/app/glowmi-ai%E8%82%8C%E8%A8%BA%E6%96%AD-%E5%B0%8F%E9%A1%94%E7%BF%92%E6%85%A3/id6763681880",
    tech: ["SwiftUI", "Claude API", "RevenueCat", "SwiftData"],
    linkLabel: "App Store",
  },
  {
    title: "めしろぐ",
    category: "iOS — 食事ログ",
    description:
      "食事を写真に撮るだけで、AIがカロリーと食費を自動で記録。栄養バランスと家計をひとつのアプリで同時に管理できる。",
    url: "https://apps.apple.com/app/%E3%82%81%E3%81%97%E3%82%8D%E3%81%90/id6761912060",
    tech: ["SwiftUI", "Vision", "Core Data"],
    linkLabel: "App Store",
  },
  {
    title: "Gomidashi",
    category: "iOS — ゴミ出しリマインダー",
    description:
      "ゴミ収集日を曜日・週（毎週・第1〜4週）で登録し、今日出せるゴミをひと目で確認できる生活アプリ。",
    url: "https://apps.apple.com/jp/app/gomidashi/id6760887454",
    tech: ["SwiftUI", "SwiftData"],
    linkLabel: "App Store",
  },
  {
    title: "禁煙くん",
    category: "iOS — 禁煙サポート",
    description:
      "銘柄ごとのタバコ価格を登録し、禁煙によって節約できた金額をリアルタイムに計算。お金の面から禁煙の継続を後押しする。",
    url: "https://apps.apple.com/jp/app/%E7%A6%81%E7%85%99%E3%81%8F%E3%82%93/id6760255111",
    tech: ["SwiftUI", "Google AdMob"],
    linkLabel: "App Store",
  },
  {
    title: "FaceNote",
    category: "iOS — 商談・会議メモ",
    description:
      "名刺の画像とあわせて商談や会議のメモを管理。カレンダービューで過去の面談を振り返れる、ビジネスパーソン向けのメモアプリ。",
    url: "https://apps.apple.com/jp/app/facenote/id6760473491",
    tech: ["SwiftUI", "SwiftData", "PhotosUI"],
    linkLabel: "App Store",
  },
  {
    title: "影響力の法則",
    category: "Web — 学習アプリ",
    description:
      "チャルディーニの6つの説得原則をインタラクティブに学べるWebアプリ。各原則の解説・演習・実践例を収録。",
    url: "https://cialdini-app.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    linkLabel: "サイトを見る",
  },
  {
    title: "ポイント最適化ダッシュボード",
    category: "Web — 家計ツール",
    description:
      "各種ポイントの残高・交換レート・有効期限を一元管理し、最も得な使い方をダッシュボードで提案する。",
    url: "https://point-optimizer-one.vercel.app/dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    linkLabel: "サイトを見る",
  },
];

const skills = [
  {
    title: "iOSアプリ開発",
    description:
      "SwiftUIを中心に、サブスクリプション課金・広告・多言語対応まで含めて、ストアに出せる品質のアプリをつくります。審査対応やリリース後の改善も一人で回してきました。",
    items: [
      "SwiftUI",
      "SwiftData",
      "StoreKit / RevenueCat",
      "Google AdMob",
      "XcodeGen",
      "App Store審査対応",
    ],
  },
  {
    title: "Webアプリ開発",
    description:
      "LPから業務ツール、AIチャットボットまで。Next.jsとVercelで、設計からデプロイ・運用までを対応します。Claude APIを使ったAI機能の組み込みも得意です。",
    items: [
      "Next.js / React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "Claude API",
    ],
  },
];

const navItems = [
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

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
              {work.category}
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

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#" className="font-serif text-lg tracking-wide">
            YK Digital Works
          </a>
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-20 sm:pt-36 sm:pb-28">
          <p className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-accent">
            iOS &amp; Web Developer
          </p>
          <h1 className="fade-up mt-6 font-serif text-[1.9rem] leading-snug sm:text-5xl sm:leading-snug">
            アイデアから、
            <br />
            App&nbsp;Storeまで届ける。
          </h1>
          <p className="fade-up-delay-1 mt-8 max-w-xl text-[15px] leading-8 text-muted">
            SwiftUIによるiOSアプリと、Next.jsによるWebアプリを個人開発でつくっているフリーランスエンジニアです。
            企画・設計・開発からストア申請、リリース後の改善まで、一人で完結して手がけます。
          </p>
          <p className="fade-up-delay-1 mt-8 font-mono text-xs text-muted tracking-wide">
            App Store公開 5本 <span className="text-line">/</span> リリース済み
            7本 <span className="text-line">/</span> 多言語対応 4言語
          </p>
          <div className="fade-up-delay-2 mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-underline text-[15px] font-medium"
            >
              開発の相談をする ↗
            </a>
            <a href="#works" className="link-underline text-[15px] text-muted">
              制作実績を見る ↓
            </a>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="pb-24 scroll-mt-20">
          <div className="mb-10 flex items-baseline gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl">制作実績</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Works
            </span>
          </div>
          <ul>
            {works.map((work, i) => (
              <WorkRow key={work.title} work={work} index={i} />
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-line py-24 scroll-mt-20">
          <div className="mb-12 flex items-baseline gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl">できること</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Skills
            </span>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
            {skills.map((skill) => (
              <div key={skill.title}>
                <h3 className="font-serif text-xl">{skill.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-muted">
                  {skill.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 font-mono text-sm text-ink/80"
                    >
                      <span className="text-accent">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-16 max-w-xl text-[15px] leading-8 text-muted">
            小さくつくって早く出し、使われながら育てていく——
            個人開発で身につけたこの進め方を、受託の仕事でも大切にしています。
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line py-24 scroll-mt-20">
          <div className="mb-8 flex items-baseline gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl">お問い合わせ</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Contact
            </span>
          </div>
          <p className="max-w-xl text-[15px] leading-8 text-muted">
            アプリ開発のご依頼・ご相談は、メールでお気軽にご連絡ください。
            アイデアの段階からでも、一緒に形を考えます。
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-underline inline-block self-start font-mono text-lg sm:text-xl"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-block self-start font-mono text-sm text-muted"
            >
              X: @YKDigitalWorks ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-8">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} YK Digital Works
          </p>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            @YKDigitalWorks
          </a>
        </div>
      </footer>
    </>
  );
}
