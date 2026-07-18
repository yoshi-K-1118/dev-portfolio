import Link from "next/link";

export const CONTACT_EMAIL = "y.k199xtbma@gmail.com";
export const X_URL = "https://x.com/YKDigitalWorks";

export default function SubpageShell({
  labelEn,
  title,
  children,
}: {
  labelEn: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-lg tracking-wide">
            YK Digital Works
          </Link>
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        <section className="pt-16 pb-10 sm:pt-24 sm:pb-14">
          <p className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {labelEn}
          </p>
          <h1 className="fade-up mt-5 font-serif text-3xl leading-snug sm:text-4xl">
            {title}
          </h1>
        </section>
        <div className="fade-up-delay-1 pb-24">{children}</div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} YK Digital Works
          </p>
          <nav className="flex gap-6">
            <Link
              href="/privacy"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/support"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              サポート
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-10">
      <h2 className="font-serif text-xl sm:text-2xl">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-8 text-muted">
        {children}
      </div>
    </section>
  );
}
