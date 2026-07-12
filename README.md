# にゃんボイス 公式サイト（静的サイト）

にゃんボイスの紹介用ランディングページです。  
HTML / CSS / JavaScript だけで構成された、GitHub Pages 向けの静的サイトです。

## サイトの内容

- ヒーローセクション（App Store への導線つき）
- 機能紹介
- 料金比較表（機能 × プラン）
- スクリーンショット / 紹介動画
- パートナーサークル掲載予定エリア
- 関連リンク（紹介記事・Xなど）
- Google Drive連携を含むプライバシーポリシー

## ディレクトリ構成

- `index.html` : ページ本体
- `privacy.html` : プライバシーポリシー
- `styles.css` : スタイル定義
- `script.js` : ナビ開閉、スクリーンショット拡大表示、スクロール演出
- `assets/img/` : 画像アセット
- `.nojekyll` : GitHub Pages で Jekyll を無効化

## ローカルでの確認方法

プロジェクトルートで以下を実行:

```bash
python3 -m http.server 4173
```

ブラウザで `http://127.0.0.1:4173/index.html` を開くと確認できます。

## GitHub Pages で公開する

1. GitHub リポジトリに push する
2. リポジトリの **Settings** -> **Pages** を開く
3. **Source** を `Deploy from a branch` に設定
4. `main` ブランチ / `/(root)` を選択して保存
5. 公開URLが発行されるまで待つ

## 編集しやすいポイント

- 文言の変更: `index.html`
- 配色・余白・コンポーネント調整: `styles.css`
- 動作変更（ライトボックス等）: `script.js`
- スクリーンショット差し替え: `assets/img/`

## 補足

- レスポンシブ対応済みです。
- 外部ライブラリは使用していません。
- 価格や機能の最新情報は App Store 表示と紹介記事を優先してください。
