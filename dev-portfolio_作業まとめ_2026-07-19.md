# dev-portfolio 作業まとめ（2026-07-18〜19）

対象サイト: https://dev-portfolio-xi-ecru.vercel.app/
ソース: GitHub `yoshi-K-1118/dev-portfolio`（mainへのpushで自動本番デプロイ）
ローカル: `~/Projects/dev-portfolio/`

---

## 1. 現状確認（2026-07-18）

- 実装は Next.js 16（App Router）+ Tailwind CSS 3。和エディトリアル調デザイン
- Git連携: GitHub連携による自動デプロイ。ローカル・GitHub・Vercelすべて同期済み
- 本番URLは正常応答（HTTP 200）
- 補足: `eslint-config-next` が 14.2.5 と古い（next は 16.2.4）。動作に影響なし、気になれば揃える

## 2. App Store申請用URLの事前検討

ポートフォリオサイトにプライバシーポリシー・サポートを置いてApp Store Connectにリンクする方式は**問題なし**。押さえるべき要件:

- ポリシー内容がアプリの実態（AdMob/IDFA/ATT・RevenueCat・AI送信）と一致していること（ガイドライン5.1.1）
- ログインなしで誰でも閲覧できること
- サポートページに実際の連絡手段があること
- 対象アプリ名を明記すること
- **アプリ内（設定画面など）からもポリシーへのリンクが必要**（未対応アプリは次回アップデートで追加）

## 3. プライバシーポリシー・サポートページ実装（コミット `6c4f720`）

### 公開URL（App Store Connect登録用）

- プライバシーポリシー: **https://dev-portfolio-xi-ecru.vercel.app/privacy**
- サポート: **https://dev-portfolio-xi-ecru.vercel.app/support**

### 実装ファイル

| ファイル | 内容 |
|---|---|
| `app/components/SubpageShell.tsx` | 下層ページ共通シェル（ヘッダー・フッター・LegalSection） |
| `app/privacy/page.tsx` | プライバシーポリシー（日英併記） |
| `app/support/page.tsx` | サポート（連絡先・対象アプリ・FAQ、英語サマリー付き） |
| `app/page.tsx` | フッターに両ページへのリンク追加 |

### ポリシー記載内容（実コード確認済みの実態ベース）

- 対象: Glowmi・めしろぐ・Gomidashi・禁煙くん・FaceNote＋今後公開するアプリ
- **5アプリすべて** Google AdMob使用 → IDFA/ATT同意の開示（全アプリ共通）
- **Glowmiのみ** RevenueCatサブスク課金＋AI肌分析時の写真送信あり
  - GlowmiAPI（Vercel）は保存なしの中継のみでClaude APIへ転送、と実態どおり記載
- めしろぐ・Gomidashi・禁煙くん・FaceNoteは端末内保存のみ・外部送信なし（コードで確認）
- 第三者サービス一覧（Google / RevenueCat / Anthropic / Apple、各ポリシーへのリンク付き）
- データ削除・子どものプライバシー・改定・連絡先の各条項

### サポートページ内容

- 連絡先: y.k199xtbma@gmail.com（返信目安2〜3営業日）、X @YKDigitalWorks
- 対象アプリ5本の一覧（App Storeリンク付き）
- FAQ: サブスク解約 / 購入の復元 / 返金（reportaproblem.apple.com）/ 機種変更の引き継ぎ / 不具合報告時に書いてほしい情報

## 4. app-ads.txt の組み込み（コミット `c3a1464`）

- GitHub Pages（https://yoshi-k-1118.github.io/app-ads.txt）と同内容を `public/app-ads.txt` に配置
- 公開URL: **https://dev-portfolio-xi-ecru.vercel.app/app-ads.txt**
- 内容: `google.com, pub-7615215253043313, DIRECT, f08c47fec0942fa0`
- `vercel.app` はPublic Suffix List登録済みのため、サブドメインでもapp-ads.txt検証は通る

### 残タスク（AdMob反映に必要）

1. App Store Connectで各アプリの**マーケティングURL**を `https://dev-portfolio-xi-ecru.vercel.app` に変更（アプリ更新の提出は不要）
2. AdMob管理画面「アプリ」→「app-ads.txt」で確認（クロール反映は最大24時間）
3. AdMob側で「承認済み」になるまでGitHub Pages側のファイルは残しておく

## 5. その他の残タスク

- [ ] 各アプリ内（設定画面など）にプライバシーポリシーURLのリンクを追加（ガイドライン5.1.1）
- [ ] App Store Connectの「アプリのプライバシー」（栄養ラベル）申告とポリシー記載の整合を確認
- [ ] （任意）`eslint-config-next` を 16.x に更新
