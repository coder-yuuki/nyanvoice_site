# にゃんボイス GitHub Pages サイト

このZIPは、GitHub Pagesでそのまま公開しやすい静的サイト一式です。

## 含まれているもの

- `index.html` : トップページ
- `styles.css` : デザイン用CSS
- `script.js` : メニュー開閉 / スクリーンショット拡大表示 / スクロール演出
- `assets/img/` : スクリーンショットとアプリアイコン
- `.nojekyll` : GitHub Pages向け

## 公開手順（GitHub Pages）

1. 新しいGitHubリポジトリを作成します。
2. このZIPの中身を、リポジトリのルートにアップロードします。
3. GitHub の **Settings** → **Pages** を開きます。
4. **Build and deployment** の **Source** を `Deploy from a branch` にします。
5. Branch を `main` / `/ (root)` に設定して保存します。
6. 数十秒ほど待つと、公開URLが発行されます。

## カスタマイズしやすい箇所

- 記事リンク：`index.html` 内の `izanami.dev` のURL
- 動画リンク：`#videos` セクション内の YouTube iframe
- 紹介文：各セクションのテキストを自由に変更できます
- スクリーンショット：`assets/img/` を差し替えればOKです

## メモ

- スマホでも見やすいレスポンシブデザインです。
- スクリーンショットは軽量化した `webp` 形式にしてあります。
- 外部ライブラリなしの構成なので、そのまま扱いやすいです。
