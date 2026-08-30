import type { Metadata } from "next";
import SubpageShell, {
  CONTACT_EMAIL,
  LegalSection,
} from "../components/SubpageShell";

export const metadata: Metadata = {
  title: "利用規約 | YK Digital Works",
  description:
    "YK Digital Worksが提供するiOSアプリ(Glowmi、Hairmi、荷待ちキロッカー、めしろぐ、Gomidashi、禁煙くん、FaceNote等)の利用規約。",
};

const ENACTED = "2026年8月30日";

export default function TermsPage() {
  return (
    <SubpageShell labelEn="Terms of Use" title="利用規約">
      <p className="text-[15px] leading-8 text-muted">
        本利用規約(以下「本規約」)は、YK Digital
        Works(代表:加藤善道、以下「当方」)がApp
        Storeで公開する、または公開を予定するすべてのiOSアプリ(以下「本アプリ」)の利用条件を定めるものです。本アプリをご利用いただいた時点で、本規約に同意いただいたものとみなします。
      </p>
      <p className="mt-4 font-mono text-xs text-muted">制定日: {ENACTED}</p>

      <div className="mt-10">
        <LegalSection title="第1条 Appleの契約との関係">
          <p>
            本アプリの利用には、Apple
            Inc.が定める「エンドユーザ使用許諾契約(標準EULA)」が適用されます。本規約は、それに加えて当方が定める事項です。両者の内容が矛盾する場合は、利用者に有利な方が優先します。
          </p>
        </LegalSection>

        <LegalSection title="第2条 料金と課金">
          <p>
            本アプリの一部には、有料の機能(買い切りまたはサブスクリプション)があります。決済はすべてAppleが処理し、当方が決済情報を取得することはありません。
          </p>
          <p>
            返金の可否はAppleの判断によります。Appleの「問題を報告する」ページ(reportaproblem.apple.com)からご請求ください。サブスクリプションの解約は、iOSの「設定」→ Apple
            ID →「サブスクリプション」から行えます。アプリを削除しただけでは解約されません。
          </p>
        </LegalSection>

        <LegalSection title="第3条 記録データの保存と消失">
          <p>
            本アプリに入力・記録されたデータは、原則として利用者の端末内にのみ保存されます。当方のサーバーに保管するものではないため、当方が復旧することはできません。
          </p>
          <p>
            端末の故障・紛失・初期化、アプリの削除、OSやアプリの更新に伴う不具合などにより、データが失われることがあります。書き出し機能があるアプリでは、重要な記録をファイルとして書き出し、利用者ご自身で保管されることをおすすめします。
          </p>
        </LegalSection>

        <LegalSection title="第4条 記録の正確性について">
          <p>
            位置情報やセンサーを用いて自動的に記録を行う機能は、OSが提供する推定に基づいており、検知の遅れ、取りこぼし、実際とは異なる判定が生じることがあります。表示される数値や集計は目安であり、当方はその正確性・完全性を保証しません。
          </p>
          <p>
            記録の内容は利用者ご自身でご確認いただき、必要に応じて修正してご利用ください。本アプリの記録を用いて行われた請求・交渉・申告・報告その他の判断および、その結果生じた事象について、当方は第7条に定める範囲を超えて責任を負いません。
          </p>
        </LegalSection>

        <LegalSection title="第5条 運転中の使用について">
          <p>
            <strong className="text-ink">
              自動車その他の車両を運転中に、端末を操作しないでください。
            </strong>
            運転中の携帯端末の操作は法令で禁止されており、重大な事故につながります。
          </p>
          <p>
            走行中の操作を防ぐ機能(走行中ロック)を備えたアプリがありますが、これは端末のセンサーによる推定に基づくものです。あらゆる状況で確実に作動することを保証するものではなく、また作動していないことが操作してよいことを意味するものでもありません。運転者は、この機能の有無や状態にかかわらず、走行中に端末を操作してはなりません。
          </p>
          <p>
            記録は停車後に行うか、同乗者に依頼してください。打刻を忘れた場合でも、あとから時刻を入力・修正できるアプリがあります。
          </p>
        </LegalSection>

        <LegalSection title="第6条 禁止事項">
          <p>本アプリの利用にあたり、次の行為を禁止します。</p>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-accent">—</span>
              法令または公序良俗に違反する行為
            </li>
            <li className="flex gap-3">
              <span className="text-accent">—</span>
              本アプリの複製、改変、逆アセンブル、逆コンパイル、リバースエンジニアリング
            </li>
            <li className="flex gap-3">
              <span className="text-accent">—</span>
              本アプリの記録を改ざんし、または虚偽の記録を作成して第三者に提示する行為
            </li>
            <li className="flex gap-3">
              <span className="text-accent">—</span>
              当方のサーバーまたはネットワークに過度の負荷をかける行為
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="第7条 免責">
          <p>
            当方は、本アプリが利用者の特定の目的に適合すること、期待する機能・正確性・有用性を有すること、および中断・エラー・不具合が生じないことを保証しません。
          </p>
          <p>
            当方の故意または重大な過失による場合を除き、本アプリの利用に関して当方が負う損害賠償責任は、利用者が本アプリに関して当方に支払った対価の額を上限とします。
          </p>
          <p>
            当方が消費者契約法その他の法令により責任を負う場合、本条の定めは、これらの法令が認める範囲でのみ適用されます。
          </p>
        </LegalSection>

        <LegalSection title="第8条 提供の変更・中止">
          <p>
            当方は、利用者への事前の通知なく、本アプリの内容を変更し、または提供を中止することがあります。これにより利用者に生じた損害について、前条の範囲を超えて責任を負いません。
          </p>
        </LegalSection>

        <LegalSection title="第9条 規約の変更">
          <p>
            当方は、必要と判断した場合に本規約を変更することがあります。重要な変更がある場合は、本ページで告知します。変更後に本アプリを利用された場合、変更後の規約に同意いただいたものとみなします。
          </p>
        </LegalSection>

        <LegalSection title="第10条 準拠法と管轄">
          <p>
            本規約は日本法に準拠します。本アプリに関して紛争が生じた場合、当方の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </LegalSection>

        <LegalSection title="第11条 お問い合わせ">
          <p>本規約に関するお問い合わせは、以下の連絡先までお願いいたします。</p>
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
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl">Terms of Use</h2>
          <p className="mt-6 text-[15px] leading-8 text-muted">
            These Terms of Use (&ldquo;Terms&rdquo;) govern the use of all iOS
            apps that YK Digital Works (Representative: Yoshimichi Kato,
            &ldquo;we&rdquo;) distributes or plans to distribute on the App
            Store (&ldquo;the Apps&rdquo;). By using an App, you agree to these
            Terms. Effective date: August 30, 2026.
          </p>

          <div className="mt-8">
            <LegalSection title="1. Relationship to Apple's agreement">
              <p>
                Apple&rsquo;s Licensed Application End User License Agreement
                applies to the Apps. These Terms are additional to it. Where the
                two conflict, whichever is more favourable to you prevails.
              </p>
            </LegalSection>

            <LegalSection title="2. Fees and purchases">
              <p>
                Some Apps offer paid features (one-time purchases or
                subscriptions). All payments are processed by Apple; we never
                receive your payment details. Refunds are at Apple&rsquo;s
                discretion via reportaproblem.apple.com. Cancel subscriptions in
                iOS Settings → Apple ID → Subscriptions; deleting an app does
                not cancel a subscription.
              </p>
            </LegalSection>

            <LegalSection title="3. Data storage and loss">
              <p>
                Data you record in the Apps is stored only on your device. We do
                not hold it on any server and therefore cannot restore it. Data
                may be lost through device failure, loss, reset, app deletion,
                or defects arising from OS or app updates. Where an export
                feature is available, we recommend exporting important records
                and keeping your own copies.
              </p>
            </LegalSection>

            <LegalSection title="4. Accuracy of records">
              <p>
                Features that record automatically using location or sensor data
                rely on estimates provided by the operating system. Detection
                may be delayed, missed, or differ from what actually happened.
                Displayed figures and summaries are approximations, and we do
                not warrant their accuracy or completeness. Please review and
                correct your records as needed. We are not liable, beyond the
                limits in Section 7, for claims, negotiations, filings, or other
                decisions made using these records, or for their outcomes.
              </p>
            </LegalSection>

            <LegalSection title="5. Do not operate while driving">
              <p>
                <strong className="text-ink">
                  Do not operate your device while driving a vehicle.
                </strong>{" "}
                Doing so is prohibited by law and can cause serious accidents.
              </p>
              <p>
                Some Apps include a driving lock that blocks interaction while
                vehicle travel is detected. This relies on device sensor
                estimates. It is not guaranteed to activate in all situations,
                and its absence does not mean it is safe to operate the device.
                Regardless of this feature, drivers must not operate the device
                while the vehicle is moving.
              </p>
            </LegalSection>

            <LegalSection title="6. Prohibited conduct">
              <p>
                You must not: violate laws or public order; copy, modify,
                disassemble, decompile, or reverse-engineer the Apps; falsify
                records or present fabricated records to third parties; or place
                an excessive load on our servers or networks.
              </p>
            </LegalSection>

            <LegalSection title="7. Disclaimer and limitation of liability">
              <p>
                We do not warrant that the Apps are fit for your particular
                purpose, that they provide the functionality, accuracy, or
                usefulness you expect, or that they will operate without
                interruption or defect.
              </p>
              <p>
                Except in cases of our wilful misconduct or gross negligence,
                our total liability arising from your use of the Apps is limited
                to the amount you have paid us in connection with the App. Where
                mandatory law (including the Japanese Consumer Contract Act)
                imposes liability on us, this Section applies only to the extent
                permitted by that law.
              </p>
            </LegalSection>

            <LegalSection title="8. Changes and termination">
              <p>
                We may change or discontinue the Apps without prior notice. We
                may also amend these Terms; significant changes will be
                announced on this page. Continued use after a change constitutes
                acceptance.
              </p>
            </LegalSection>

            <LegalSection title="9. Governing law and contact">
              <p>
                These Terms are governed by the laws of Japan, with the court
                having jurisdiction over our location as the exclusive court of
                first instance. For questions, contact{" "}
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
