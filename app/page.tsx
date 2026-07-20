import WorksSection from "./components/WorksSection";

const CONTACT_EMAIL = "info@ykdigitalworks.com";
const X_URL = "https://x.com/YKDigitalWorks";

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
            8本 <span className="text-line">/</span> 多言語対応 4言語
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
        <WorksSection />

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
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} YK Digital Works
          </p>
          <nav className="flex flex-wrap gap-6">
            <a
              href="/privacy"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              プライバシーポリシー
            </a>
            <a
              href="/support"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              サポート
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              @YKDigitalWorks
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
