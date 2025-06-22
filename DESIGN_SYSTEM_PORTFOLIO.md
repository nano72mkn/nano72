# デザイン設計書 - nano72 ポートフォリオサイト

## 1. デザインコンセプト

### 基本理念
個人開発者「nano72」の活動と作品を紹介するポートフォリオサイト。シンプルでミニマルなデザインの中に、作り手の「体温」や「柔らかさ」を感じられる、パーソナルで親しみやすいデザインを目指します。

### キーワード
- クリーン (Clean)
- 静か (Quiet)
- 余白の美 (Beauty of Space)
- パーソナル (Personal)
- クリエイティブ (Creative)

### デザインの方向性
- 余白を大胆に使い、コンテンツを引き立てる
- 装飾を極力排除し、本質的な情報に集中できるデザイン
- 柔らかい曲線と角丸で親しみやすさを演出
- アニメーションは控えめに、必要最小限に留める

## 2. カラーパレット

```css
/* ベースカラー */
--color-base: hsl(0, 0%, 98%);         /* #FAFAFA - ほぼ白に近いごく薄いグレー */
--color-sub-base: hsl(0, 0%, 93%);     /* #EDEDED - 少し濃いグレー */

/* テキストカラー */
--color-text-primary: hsl(0, 0%, 20%); /* #333333 - ダークグレー */
--color-text-secondary: hsl(0, 0%, 40%); /* #666666 - ミディアムグレー */

/* アクセントカラー */
--color-accent: hsl(39, 73%, 63%);     /* #E8B54B - 山吹色（ロゴから抽出） */
--color-accent-hover: hsl(39, 73%, 53%); /* #D89F2B - ホバー時の濃い山吹色 */
--color-accent-light: hsl(39, 73%, 90%); /* #FAF0DC - 薄い山吹色（背景用） */

/* ボーダー・その他 */
--color-border: hsl(0, 0%, 87%);       /* #DEDEDE - 区切り線など */
--color-white: #FFFFFF;                /* 純白 */
--color-shadow: hsla(0, 0%, 0%, 0.05); /* 薄い影 */
```

## 3. タイポグラフィ

### フォントファミリー
```css
--font-primary: 'Noto Sans JP', sans-serif;
```

### フォントサイズ・ウェイト
```css
/* 基本設定 */
--font-size-base: 16px;
--line-height-base: 1.8;

/* 見出し */
--font-size-h1: 2.5rem;    /* 40px */
--font-size-h2: 1.8rem;    /* 28.8px */
--font-size-h3: 1.4rem;    /* 22.4px */
--font-weight-heading: 700; /* Bold */

/* 本文 */
--font-size-body: 1rem;     /* 16px */
--font-size-small: 0.875rem; /* 14px */
--font-weight-body: 400;    /* Regular */
--font-weight-medium: 500;  /* Medium */

/* その他 */
--letter-spacing-wide: 0.08em;
--letter-spacing-normal: 0.04em;
```

## 4. スペーシングシステム

### 基本単位
```css
--spacing-unit: 8px;

/* スペーシングスケール */
--space-xs: calc(var(--spacing-unit) * 0.5);   /* 4px */
--space-sm: calc(var(--spacing-unit) * 1);     /* 8px */
--space-md: calc(var(--spacing-unit) * 2);     /* 16px */
--space-lg: calc(var(--spacing-unit) * 3);     /* 24px */
--space-xl: calc(var(--spacing-unit) * 4);     /* 32px */
--space-2xl: calc(var(--spacing-unit) * 6);    /* 48px */
--space-3xl: calc(var(--spacing-unit) * 8);    /* 64px */
--space-4xl: calc(var(--spacing-unit) * 10);   /* 80px */
--space-5xl: calc(var(--spacing-unit) * 15);   /* 120px */
```

### セクション間の余白
- PC: 120px以上
- タブレット: 80px
- モバイル: 60px

## 5. レイアウト

### コンテナ
```css
--container-max-width: 1100px;
--container-padding-x: 24px;
```

### グリッドシステム
- アプリカード: 3カラムグリッド（PC）、2カラム（タブレット）、1カラム（モバイル）
- ギャップ: 32px
- レスポンシブブレークポイント:
  - モバイル: < 640px
  - タブレット: 640px - 1024px
  - デスクトップ: > 1024px

## 6. コンポーネント仕様

### ヘッダー
- 高さ: 80px
- 背景: rgba(250, 250, 250, 0.85)
- ぼかし効果: backdrop-filter: blur(8px)
- 影: なし（シンプルさを重視）
- スティッキー配置
- ロゴサイズ: 高さ40px

### ナビゲーション
- フォントサイズ: 0.875rem
- フォントウェイト: 500
- 文字色: --color-text-secondary
- ホバー時: --color-accent
- アクティブ時: --color-accent + 下線

### アプリ紹介カード
```css
.app-card {
  background: var(--color-white);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px var(--color-shadow);
  transition: all 0.3s ease;
}

.app-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.08);
}
```

構成要素：
- アプリアイコン: 64px × 64px、角丸12px
- アプリ名: font-size: 1.25rem、font-weight: 600
- 説明文: font-size: 0.875rem、color: --color-text-secondary
- タグ: 背景 --color-accent-light、文字 --color-accent
- リンク: 「詳しく見る →」スタイル

### ボタン
```css
/* プライマリボタン（使用頻度低） */
.btn-primary {
  background: var(--color-accent);
  color: var(--color-white);
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* テキストリンクスタイル（主に使用） */
.text-link {
  color: var(--color-accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.text-link:hover {
  border-bottom-color: var(--color-accent);
}
```

### フッター
- 背景: --color-sub-base
- パディング: 48px 0
- コンテンツ: 著作権表示、SNSリンク
- シンプルで控えめなデザイン

## 7. ページ別デザイン仕様

### トップページ (`/`)
1. **ヒーローセクション**
   - 簡潔な自己紹介文
   - 「小さな太陽のような、温かいアプリを。」のようなキャッチコピー
   - 大きな余白で印象的に

2. **アプリ紹介セクション**
   - 代表作2-3個をカード形式で表示
   - 「すべてのアプリを見る →」リンク

3. **お知らせセクション（オプション）**
   - 最新情報を3件程度
   - シンプルなリスト形式

### Aboutページ (`/about`)
- 2カラムレイアウト（テキスト + 写真/イラスト）
- 自己紹介、開発理念、経歴
- 十分な行間と余白で読みやすく

### Appsページ (`/apps`)
- グリッドレイアウトでアプリカードを配置
- フィルタリング機能（リリース済み/開発中）
- 各アプリの詳細モーダルまたは外部リンク

### Contactページ (`/contact`)
- シンプルなコンタクト情報
- メールアドレス、SNSリンク
- 必要に応じて簡易フォーム

## 8. インタラクション

### マイクロインタラクション
- リンクホバー: カラー変更 + アンダーライン
- カードホバー: 少し浮き上がる + 影の強化
- ボタンホバー: 背景色を少し濃く

### スクロール演出
- フェードイン: 控えめに、opacity 0.8→1
- 実行タイミング: 要素が画面内に50%入った時
- イージング: ease-out

### ページ遷移
- 瞬時切り替え（アニメーションなし）
- フォーカスをコンテンツに

## 9. レスポンシブ対応

### ブレークポイント
```css
/* Tailwind CSS標準ブレークポイント */
sm: 640px   /* モバイル横向き */
md: 768px   /* タブレット */
lg: 1024px  /* デスクトップ */
xl: 1280px  /* 大画面 */
```

### モバイル最適化
- ナビゲーション: ハンバーガーメニュー
- アプリカード: 1カラム表示
- フォントサイズ: 基本16px維持
- 余白: PCの60-70%に調整

## 10. アクセシビリティ

- コントラスト比: WCAG AAレベル以上
- フォーカスインジケータ: アクセントカラーで明確に
- 代替テキスト: すべての画像・アイコンに設定
- セマンティックHTML: 適切な見出し構造

## 11. パフォーマンス

- 画像: WebP形式、遅延読み込み
- フォント: サブセット化、display: swap
- CSS: 未使用のTailwindクラスをパージ
- JS: 最小限の使用

## 12. 実装における注意事項

### 全体的な方針
- 「引き算」のデザイン - 必要最小限の要素で構成
- コンテンツファースト - 内容を最も重要視
- 一貫性 - 全ページで統一感のあるデザイン

### nano72らしさの表現
- ロゴの曲線的な柔らかさを随所に反映
- 温かみのある山吹色を効果的に使用
- 余白を贅沢に使い、ゆとりある印象に
- 個人の「顔」が見えるパーソナルな雰囲気