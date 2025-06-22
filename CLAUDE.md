# ナノナツ 会社サイト

## 概要
ナノナツの会社サイト。Astroで構築された静的サイトで、GitHub Pagesでホスティングされている。

## サイト情報
- **URL**: https://nano72.com (GitHub Pages)
- **会社名**: ナノナツ
- **事業内容**: スマートフォン向けアプリケーションの企画・開発・運営

## 技術スタック
- **フレームワーク**: Astro v5.10.0
- **言語**: TypeScript
- **スタイリング**: CSS (CSS Variables使用)
- **フォント**: M PLUS Rounded 1c, Noto Sans JP (Google Fonts)
- **デプロイ**: GitHub Pages (GitHub Actions)

## ディレクトリ構造
```
src/
├── components/
│   ├── Header.astro      # ヘッダーコンポーネント
│   ├── Footer.astro      # フッターコンポーネント
│   ├── Logo.astro        # SVGロゴ（未使用）
│   └── LogoImage.astro   # PNGロゴ画像コンポーネント
├── layouts/
│   └── BaseLayout.astro  # 基本レイアウト（OGP設定含む）
├── pages/
│   ├── index.astro       # トップページ
│   ├── about.astro       # 会社情報ページ
│   ├── apps.astro        # アプリ一覧ページ
│   └── contact.astro     # お問い合わせページ
└── styles/
    └── global.css        # グローバルスタイル
```

## デザインシステム
### カラーパレット
- **プライマリ**: `#ff8c00` (オレンジ)
- **プライマリライト**: `#ffa726`
- **プライマリダーク**: `#e65100`
- **背景**: `#ffffff`
- **テキスト**: `#333333`
- **テキストライト**: `#666666`
- **グレーライト**: `#f5f5f5`
- **グレー**: `#e0e0e0`

### ロゴ
- `/public/logo.png` - オレンジ色の太陽モチーフのロゴ画像
- `/public/favicon.svg` - ファビコン（SVG形式の太陽アイコン）

## 開発アプリ
1. **habit tap**
   - 習慣化サポートアプリ
   - ステータス: リリース済み
   
2. **Evememo**
   - イベント記録・思い出管理アプリ
   - ステータス: 開発中（2025年リリース予定）

## 開発コマンド
```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## デプロイ
- mainブランチへのプッシュで自動デプロイ
- GitHub Actions (`.github/workflows/deploy.yml`)
- GitHub Pages設定: Source = GitHub Actions

## 今後の拡張予定
- サブドメインでの各アプリサイト
  - habit-tap.nano72.com
  - evememo.nano72.com

## 注意事項
- レスポンシブ対応済み
- 日本語サイト
- お問い合わせフォームはNetlify Forms想定（GitHub Pagesでは別途対応必要）
- OGP画像は現在ロゴ画像を使用（専用画像への差し替え推奨）