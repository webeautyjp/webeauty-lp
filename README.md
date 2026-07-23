# WEBEAUTY LP（静的サイト）

旧WordPress（webeauty-osaka.com）の代わりに、維持費ゼロで運用するための静的LP一式。

## ページ構成
| ファイル | 内容 |
|---|---|
| `index.html` | 入口（大阪店／麻布十番店／採用へ振り分け） |
| `osaka.html` | WEBEAUTY大阪店 LP |
| `azabu.html` | WEBEAUTY麻布十番店 LP |
| `recruit.html` | 採用（セラピスト募集）ページ |
| `assets/style.css` | 全ページ共通デザイン（ここを直せば全ページ反映） |
| `assets/main.js` | 共通スクリプト（ヘッダー・メニュー・アニメ） |
| `assets/img/` | 画像・動画 |
| `assets/harvest/` | 旧サイトから吸い出した元原稿・生HTML（バックアップ。公開には不要） |

予約導線は各店の **公式LINE＋電話** に一本化（Web予約フォームは廃止）。

## 文章を直したいとき
各 `.html` を開き、テキスト部分を書き換えるだけ。デザインは触らなくてOK。
料金・住所・電話・営業時間は各 `.html` の該当箇所にそのまま書かれています。

## GitHub Pages で公開する手順（無料）
1. GitHubで新しいリポジトリを作成（例: `webeauty-lp`）。Publicにする。
2. このフォルダの中身をアップロード（`index.html` がリポジトリ直下に来るように）。
   - 公開に不要な `assets/harvest/` と `tasks/` は上げなくてOK（上げても表示に影響なし）。
3. リポジトリの **Settings → Pages** を開く。
4. 「Build and deployment」→ Source を **Deploy from a branch**、Branch を **main / (root)** に設定して Save。
5. 数分後、`https://<ユーザー名>.github.io/webeauty-lp/` で公開されます。
   - トップは `index.html`。各店は `/osaka.html` `/azabu.html`、採用は `/recruit.html`。

## 公開後にやること（集客導線を切らさない順番）
1. 上記URLで表示を確認。
2. Instagram・Googleビジネスプロフィール・名刺などのリンクを新URLへ差し替え。
3. **それが済んでから**、旧サイト `webeauty-osaka.com` とドメインの解約を契約者（管理会社等）へ依頼。
   ※旧サイトを消すと既存リンクが切れるので、必ず差し替え完了後に。

## 補足
- Google Fonts・Googleマップ埋め込みは外部読込（一般的なWebサイトなので問題なし）。
- 画像の著作権はサロン所有物を流用。
- 掲載の体験談・写真は個人の感想であり、効果を保証するものではありません（薬機法配慮の注記を各ページに記載済み）。
