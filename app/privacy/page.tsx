import type { Metadata } from "next";
import SubpageShell, {
  CONTACT_EMAIL,
  LegalSection,
} from "../components/SubpageShell";

export const metadata: Metadata = {
  title: "プライバシーポリシー | YK Digital Works",
  description:
    "YK Digital Worksが公開するiOSアプリ(Glowmi、めしろぐ、Gomidashi、禁煙くん、FaceNote等)のプライバシーポリシー。",
};

const ENACTED = "2026年7月18日";

type AppSummary = {
  name: string;
  nameEn: string;
  storage: string;
  storageEn: string;
};

const apps: AppSummary[] = [
  {
    name: "Glowmi",
    nameEn: "Glowmi",
    storage:
      "スキンケアの記録・写真・メモは端末内にのみ保存されます。AI肌分析を実行したときのみ、対象の写真が分析のために外部へ送信されます(第3条参照)。広告表示(Google AdMob)とサブスクリプション課金(RevenueCat)があります。",
    storageEn:
      "Skincare records, photos, and notes are stored only on your device. Only when you run an AI skin analysis, the selected photo is transmitted externally for analysis (see Section 3). The app shows ads (Google AdMob) and offers subscriptions (RevenueCat).",
  },
  {
    name: "めしろぐ",
    nameEn: "Meshilog",
    storage:
      "食事の写真・記録は端末内にのみ保存されます。画像の解析は端末内で完結し、外部への送信はありません。広告表示(Google AdMob)があります。",
    storageEn:
      "Meal photos and records are stored only on your device. Image analysis is performed entirely on-device; nothing is transmitted externally. The app shows ads (Google AdMob).",
  },
  {
    name: "Gomidashi",
    nameEn: "Gomidashi",
    storage:
      "ゴミ収集日の設定は端末内にのみ保存され、外部への送信はありません。広告表示(Google AdMob)があります。",
    storageEn:
      "Your garbage collection schedule is stored only on your device and is never transmitted externally. The app shows ads (Google AdMob).",
  },
  {
    name: "禁煙くん",
    nameEn: "Kinen-kun",
    storage:
      "禁煙記録・タバコ価格の設定は端末内にのみ保存され、外部への送信はありません。広告表示(Google AdMob)があります。",
    storageEn:
      "Your quit-smoking records and cigarette price settings are stored only on your device and are never transmitted externally. The app shows ads (Google AdMob).",
  },
  {
    name: "FaceNote",
    nameEn: "FaceNote",
    storage:
      "名刺画像・商談メモは端末内にのみ保存され、外部への送信はありません。広告表示(Google AdMob)があります。",
    storageEn:
      "Business card images and meeting notes are stored only on your device and are never transmitted externally. The app shows ads (Google AdMob).",
  },
];

const thirdPartyServices = [
  {
    name: "Google AdMob(広告配信)",
    url: "https://policies.google.com/privacy",
    urlLabel: "Google プライバシーポリシー",
  },
  {
    name: "RevenueCat(サブスクリプション管理)",
    url: "https://www.revenuecat.com/privacy",
    urlLabel: "RevenueCat Privacy Policy",
  },
  {
    name: "Anthropic Claude API(AI分析)",
    url: "https://www.anthropic.com/legal/privacy",
    urlLabel: "Anthropic Privacy Policy",
  },
  {
    name: "Apple App Store(課金処理)",
    url: "https://www.apple.com/legal/privacy/",
    urlLabel: "Apple Privacy Policy",
  },
];

export default function PrivacyPage() {
  return (
    <SubpageShell labelEn="Privacy Policy" title="プライバシーポリシー">
      <p className="text-[15px] leading-8 text-muted">
        YK Digital Works(代表:加藤善道、以下「当方」)は、当方がApp
        Storeで公開するすべてのiOSアプリ(以下「本アプリ」)における利用者の情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。本ポリシーは、現在公開中のアプリ(Glowmi、めしろぐ、Gomidashi、禁煙くん、FaceNote)および今後当方が公開するアプリに適用されます。
      </p>
      <p className="mt-4 font-mono text-xs text-muted">制定日: {ENACTED}</p>

      <div className="mt-10">
        <LegalSection title="第1条 基本方針">
          <p>
            本アプリは、利用者のプライバシーを尊重し、収集する情報を機能の提供に必要な最小限にとどめます。本アプリにアカウント登録機能はなく、当方が氏名・住所・電話番号などの個人情報を取得・保管することはありません。
          </p>
        </LegalSection>

        <LegalSection title="第2条 端末内に保存されるデータ">
          <p>
            利用者が本アプリに入力・撮影したデータ(写真、メモ、記録など)は、原則として利用者の端末内にのみ保存されます。これらのデータに当方がアクセスすることはできません。アプリを削除すると、端末内のデータも削除されます。
          </p>
        </LegalSection>

        <LegalSection title="第3条 AI分析のためのデータ送信">
          <p>
            AI分析機能を持つアプリ(Glowmiなど)では、利用者が分析を実行したときに限り、対象の写真および関連する入力内容が、当方の中継サーバーを経由してAnthropic社のClaude
            APIに送信されます。送信されたデータは分析結果の生成のみに使用され、当方のサーバーに保存されることはありません。Anthropic社におけるデータの取り扱いは、同社のプライバシーポリシーに従います。
          </p>
        </LegalSection>

        <LegalSection title="第4条 広告について">
          <p>
            本アプリは、Google
            AdMobを利用して広告を表示します。広告配信のため、広告識別子(IDFA)や端末情報がGoogle社によって収集される場合があります。IDFAの利用は、iOSのApp
            Tracking
            Transparency(ATT)の同意ダイアログで利用者が許可した場合に限られます。許可しない場合でも、パーソナライズされない広告が表示され、アプリの機能はすべて利用できます。
          </p>
        </LegalSection>

        <LegalSection title="第5条 課金情報について">
          <p>
            サブスクリプション等のアプリ内課金があるアプリ(Glowmiなど)では、決済はAppleによって処理されます。当方がクレジットカード情報等の決済情報を取得することはありません。課金状態の管理にはRevenueCatを利用しており、匿名の識別子と購入履歴のみが扱われます。
          </p>
        </LegalSection>

        <LegalSection title="第6条 利用する第三者サービス">
          <p>本アプリでは、アプリごとに以下の第三者サービスを利用しています。</p>
          <ul className="space-y-3">
            {thirdPartyServices.map((s) => (
              <li key={s.name} className="flex flex-wrap items-baseline gap-x-3">
                <span className="flex items-baseline gap-3 text-ink/80">
                  <span className="text-accent">—</span>
                  {s.name}
                </span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono text-xs"
                >
                  {s.urlLabel} ↗
                </a>
              </li>
            ))}
          </ul>
        </LegalSection>

        <LegalSection title="第7条 アプリ別のデータの取り扱い">
          <ul className="space-y-6">
            {apps.map((app) => (
              <li key={app.name}>
                <h3 className="font-serif text-lg text-ink">{app.name}</h3>
                <p className="mt-2">{app.storage}</p>
              </li>
            ))}
          </ul>
          <p>
            今後公開するアプリについても本ポリシーが適用されます。データの取り扱いが本ポリシーの記載と大きく異なる場合は、本ページを更新してお知らせします。
          </p>
        </LegalSection>

        <LegalSection title="第8条 データの削除">
          <p>
            端末内のデータは、アプリを削除することですべて削除できます。サブスクリプションの解約は、iOSの「設定」→ Apple
            ID →「サブスクリプション」から行えます(アプリの削除だけでは解約されません)。
          </p>
        </LegalSection>

        <LegalSection title="第9条 子どものプライバシー">
          <p>
            本アプリは13歳未満の子どもを対象としておらず、13歳未満の子どもから意図的に情報を収集することはありません。
          </p>
        </LegalSection>

        <LegalSection title="第10条 ポリシーの変更">
          <p>
            本ポリシーの内容は、法令の変更やアプリの機能追加に応じて改定されることがあります。重要な変更がある場合は、本ページで告知します。
          </p>
        </LegalSection>

        <LegalSection title="第11条 お問い合わせ">
          <p>
            本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
          </p>
          <p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-underline font-mono text-sm"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </LegalSection>

        {/* English version */}
        <section className="border-t-2 border-line pt-12 mt-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            English
          </p>
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl">
            Privacy Policy
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-muted">
            YK Digital Works (Representative: Yoshimichi Kato, &ldquo;we&rdquo;)
            publishes this Privacy Policy for all iOS apps we distribute on the
            App Store (&ldquo;the Apps&rdquo;), including Glowmi, Meshilog,
            Gomidashi, Kinen-kun, FaceNote, and any apps we release in the
            future. Effective date: July 18, 2026.
          </p>

          <div className="mt-8">
            <LegalSection title="1. Our approach">
              <p>
                The Apps collect only the minimum information necessary to
                provide their features. The Apps have no account registration,
                and we never collect or store personal information such as your
                name, address, or phone number.
              </p>
            </LegalSection>

            <LegalSection title="2. Data stored on your device">
              <p>
                Data you enter or capture in the Apps (photos, notes, records)
                is stored only on your device. We cannot access it. Deleting an
                app deletes its on-device data.
              </p>
            </LegalSection>

            <LegalSection title="3. Data transmitted for AI analysis">
              <p>
                In apps with AI analysis features (such as Glowmi), only when
                you run an analysis, the selected photo and related input are
                sent through our relay server to Anthropic&rsquo;s Claude API.
                The data is used solely to generate the analysis result and is
                never stored on our server. Anthropic&rsquo;s handling of the
                data is governed by its own privacy policy.
              </p>
            </LegalSection>

            <LegalSection title="4. Advertising">
              <p>
                The Apps display ads via Google AdMob. Google may collect the
                advertising identifier (IDFA) and device information for ad
                delivery. The IDFA is used only if you allow tracking in the
                iOS App Tracking Transparency (ATT) prompt. If you decline,
                non-personalized ads are shown and all app features remain
                available.
              </p>
            </LegalSection>

            <LegalSection title="5. Purchases">
              <p>
                In apps with in-app purchases (such as Glowmi), payments are
                processed by Apple. We never receive your payment details.
                Subscription status is managed via RevenueCat using an
                anonymous identifier and purchase history only.
              </p>
            </LegalSection>

            <LegalSection title="6. Per-app data handling">
              <ul className="space-y-6">
                {apps.map((app) => (
                  <li key={app.nameEn}>
                    <h3 className="font-serif text-lg text-ink">
                      {app.nameEn}
                    </h3>
                    <p className="mt-2">{app.storageEn}</p>
                  </li>
                ))}
              </ul>
            </LegalSection>

            <LegalSection title="7. Data deletion">
              <p>
                All on-device data can be deleted by removing the app. To
                cancel a subscription, go to iOS Settings → Apple ID →
                Subscriptions (deleting the app does not cancel a
                subscription).
              </p>
            </LegalSection>

            <LegalSection title="8. Children's privacy">
              <p>
                The Apps are not directed at children under 13, and we do not
                knowingly collect information from children under 13.
              </p>
            </LegalSection>

            <LegalSection title="9. Changes and contact">
              <p>
                We may update this policy as laws change or app features are
                added; significant changes will be announced on this page. For
                questions, contact{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="link-underline font-mono text-sm"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </LegalSection>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
