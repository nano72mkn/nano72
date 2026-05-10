# ナノナツ 会社サイト

## 概要
ナノナツの会社サイト。Astroで構築された静的サイトで、Netlifyでホスティングされている。

## サイト情報
- **URL**: https://nano72.com (Netlify)
- **屋号**: nano72（読み: ナノナツ）
- **代表者**: 宮平 将汰
- **所在地**: 〒150-0041 東京都渋谷区神南１丁目１１−４ ＦＰＧリンクス神南 5階
- **事業内容**: スマートフォン向けアプリケーションの企画・開発・運営
- **開業日**: 2025年7月2日
- **連絡先**: contact@nano72.com

## 技術スタック
- **フレームワーク**: Astro v5.10.0
- **言語**: TypeScript
- **スタイリング**: CSS (CSS Variables使用)
- **フォント**: M PLUS Rounded 1c, Noto Sans JP (Google Fonts)
- **デプロイ**: Netlify（mainブランチへのプッシュで自動デプロイ）

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
│   ├── about.astro       # ナノナツについて／事業者情報（#company）
│   ├── contact.astro     # お問い合わせページ
│   ├── privacy.astro     # プライバシーポリシー
│   ├── terms.astro       # 利用規約
│   ├── habit-tap.astro   # Habit Tap LP
│   ├── evememo.astro     # Evememo LP
│   ├── minimal.astro     # 別バージョンのトップ
│   └── news/[...slug].astro  # お知らせ詳細ページ
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

2. **Share Basket**
   - 情報・リンク管理共有アプリ
   - ステータス: リリース済み（iOS版のみ）
   - URL: https://share-basket.app/

3. **Evememo**
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
- mainブランチへのプッシュで Netlify が自動デプロイ
- お問い合わせフォームは Netlify Forms を使用

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