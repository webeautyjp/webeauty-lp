# WEBEAUTY LP 作り直しプロジェクト

## 目的
- 旧LP（WordPress / webeauty-osaka.com・維持費が発生し続け放置状態）を、
  維持費ゼロの静的サイトに置き換える。
- 予約導線は LINE＋電話に一本化（カレンダー予約は廃止）。
- 大阪店・麻布十番店・採用ページの3種を、共通テンプレで作る。
- ホスティングは GitHub Pages（完全無料）。

## 決定事項（2026-07-23 合意）
- 技術: HTML＋共通CSS1枚、ビルド不要、スマホ最優先。
- 構成: index.html（入口）/ osaka.html / azabu.html / recruit.html / assets/style.css。
- 画像: 旧サイトの画像を流用（ビフォーアフター風もそのまま使用）。
- 表現: 薬機法・景表法配慮。「治る/必ず変わる」等の断定を避け、主観表現のみ。
- ドメイン: 田中さん契約でないため解約。新URLは GitHub Pages の無料アドレス。
- 旧サイト削除は契約者（管理会社等）に依頼が必要 → 新LP公開・リンク差替え後に実施。

## プラン
- [x] 1. 旧サイトの本文・画像を吸い出して保存（/osaka /azabu /menu /feature /voice /faq /recruitment /shoplist）※129点・失敗0
- [x] 2. 共通デザイン assets/style.css を作成（＋main.js）
- [x] 3. 大阪店LP osaka.html を作成
- [x] 4. 麻布十番店LP azabu.html を作成（テンプレ流用・店舗情報差替え）
- [x] 5. 採用ページ recruit.html を作成
- [x] 6. 入口ページ index.html を作成（大阪／麻布十番／採用への導線）
- [x] 7. ローカル確認（DOM実測でPC/タブレット/スマホ検証・横スクロール無し・全リンク正・画像欠損0・ハンバーガー/CTA動作）※スクショ機能は当環境で不応答のため実測で代替
- [ ] 8. GitHub リポジトリ作成 & GitHub Pages 公開（田中さんのGitHubアカウントが必要）
- [ ] 9. 【公開後】Instagram・Googleビジネス・名刺のリンクを新URLへ差替え
- [ ] 10. 【差替え後】旧サイト＆ドメインの解約を契約者へ依頼

## レビュー欄
（実装後に追記）
