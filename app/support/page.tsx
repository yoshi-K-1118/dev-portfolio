import type { Metadata } from "next";
import SubpageShell, {
  CONTACT_EMAIL,
  LegalSection,
  X_URL,
} from "../components/SubpageShell";

export const metadata: Metadata = {
  title: "サポート | YK Digital Works",
  description:
    "YK Digital Worksが公開するiOSアプリ(Glowmi、めしろぐ、Gomidashi、禁煙くん、FaceNote等)のサポート・お問い合わせページ。",
};

const supportedApps = [
  {
    name: "Glowmi",
    category: "AIスキンケア記録",
    url: "https://apps.apple.com/app/glowmi-ai%E8%82%8C%E8%A8%BA%E6%96%AD-%E5%B0%8F%E9%A1%94%E7%BF%92%E6%85%A3/id6763681880",
  },
  {
    name: "めしろぐ",
    category: "食事ログ",
    url: "https://apps.apple.com/app/%E3%82%81%E3%81%97%E3%82%8D%E3%81%90/id6761912060",
  },
  {
    name: "Gomidashi",
    category: "ゴミ出しリマインダー",
    url: "https://apps.apple.com/jp/app/gomidashi/id6760887454",
  },
  {
    name: "禁煙くん",
    category: "禁煙サポート",
    url: "https://apps.apple.com/jp/app/%E7%A6%81%E7%85%99%E3%81%8F%E3%82%93/id6760255111",
  },
  {
    name: "FaceNote",
    category: "商談・会議メモ",
    url: "https://apps.apple.com/jp/app/facenote/id6760473491",
  },
];

const faqs = [
  {
    q: "サブスクリプションを解約したい",
    a: "サブスクリプションの解約はAppleを通じて行います。iOSの「設定」→ 一番上のApple ID →「サブスクリプション」から、対象のアプリを選んで解約できます。アプリを削除しただけでは解約されませんのでご注意ください。",
  },
  {
    q: "購入したサブスクリプションを復元したい",
    a: "機種変更や再インストールの後は、アプリ内の設定画面にある「購入を復元」を実行してください。購入時と同じApple IDでサインインしている必要があります。",
  },
  {
    q: "返金してほしい",
    a: "アプリ内課金の返金はAppleが処理します。Appleの「問題を報告する」ページ(reportaproblem.apple.com)から返金をリクエストしてください。",
  },
  {
    q: "機種変更でデータを引き継げますか?",
    a: "各アプリのデータは端末内に保存されています。iPhoneの移行機能(クイックスタート)またはiCloudバックアップからの復元で新しい端末に引き継げます。アプリを削除するとデータも削除されますのでご注意ください。",
  },
  {
    q: "不具合を見つけた・要望がある",
    a: "下記のメールアドレスまでご連絡ください。不具合の場合は「アプリ名・お使いの機種・iOSのバージョン・発生した操作や状況」を書き添えていただけると、調査がスムーズです。",
  },
];

export default function SupportPage() {
  return (
    <SubpageShell labelEn="Support" title="サポート">
      <p className="text-[15px] leading-8 text-muted">
        YK Digital
        Worksが公開するiOSアプリのサポートページです。使い方のご質問、不具合のご報告、機能のご要望など、お気軽にお問い合わせください。
      </p>

      <div className="mt-10">
        <LegalSection title="お問い合わせ">
          <p>
            メールでのお問い合わせを受け付けています。通常2〜3営業日以内に返信いたします。
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-underline inline-block self-start font-mono text-lg"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-block self-start font-mono text-sm"
            >
              X: @YKDigitalWorks ↗
            </a>
          </div>
        </LegalSection>

        <LegalSection title="対象アプリ">
          <ul className="space-y-3">
            {supportedApps.map((app) => (
              <li key={app.name} className="flex flex-wrap items-baseline gap-x-4">
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-serif text-lg text-ink"
                >
                  {app.name}
                </a>
                <span className="font-mono text-xs text-muted tracking-wide">
                  iOS — {app.category}
                </span>
              </li>
            ))}
          </ul>
          <p>今後公開するアプリも、本ページでサポートを行います。</p>
        </LegalSection>

        <LegalSection title="よくある質問">
          <ul className="space-y-8">
            {faqs.map((faq) => (
              <li key={faq.q}>
                <h3 className="flex items-baseline gap-3 font-medium text-ink">
                  <span className="text-accent">Q.</span>
                  {faq.q}
                </h3>
                <p className="mt-2 pl-7">{faq.a}</p>
              </li>
            ))}
          </ul>
        </LegalSection>

        <LegalSection title="プライバシーについて">
          <p>
            各アプリにおけるデータの取り扱いは、
            <a href="/privacy" className="link-underline text-ink">
              プライバシーポリシー
            </a>
            をご覧ください。
          </p>
        </LegalSection>

        {/* English */}
        <section className="border-t-2 border-line pt-12 mt-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            English
          </p>
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl">Support</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-8 text-muted">
            <p>
              This is the support page for iOS apps published by YK Digital
              Works (Glowmi, Meshilog, Gomidashi, Kinen-kun, FaceNote, and
              future releases). For questions, bug reports, or feature
              requests, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="link-underline font-mono text-sm"
              >
                {CONTACT_EMAIL}
              </a>
              . We usually reply within 2–3 business days.
            </p>
            <p>
              To cancel a subscription, go to iOS Settings → Apple ID →
              Subscriptions. To request a refund, use Apple&rsquo;s Report a
              Problem page (reportaproblem.apple.com). When reporting a bug,
              please include the app name, your device model, iOS version, and
              the steps that caused the issue.
            </p>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
