# ナノナツ 会社サイト

## 概要
ナノナツの会社サイト。Astroで構築された静的サイトで、Netlifyでホスティングされている。

## サイト情報
- **URL**: https://nano72.com (Netlify)
- **会社名**: ナノナツ
- **事業内容**: スマートフォン向けアプリケーションの企画・開発・運営
- **開業日**: 2025年7月2日

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
1. **Habit Tap**
   - 習慣化サポートアプリ
   - ステータス: リリース済み（iOS版のみ）
   - URL: https://nano72.com/habit-tap
   
2. **irodori**
   - ミッション管理アプリ
   - ステータス: リリース済み（iOS版、Web版）
   - URL: https://irodori-mission.me/
   - App Store: https://apple.co/3I2yLnm
   
3. **Share Basket**
   - 情報・リンク管理共有アプリ
   - ステータス: リリース済み（iOS版のみ）
   - URL: https://share-basket.app/
   
4. **Evememo**
   - AI活用イベント情報整理アプリ
   - SNSやWebからシェアするだけでAIが情報を整理
   - ステータス: 開発中（2025年夏リリース予定）

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
- お問い合わせフォームはNetlify Forms使用
- OGP画像は現在ロゴ画像を使用（専用画像への差し替え推奨）

## 開発ルール
- 仕様を変更した時に、ドキュメントを確認し、修正しましょう