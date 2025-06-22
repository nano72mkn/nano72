# デザイン設計書 - ミニマル個人事業主サイト

## 1. デザインコンセプト

### 基本理念
「余白の美」を最重要要素として、シンプルで洗練された信頼感のあるデザインを実現します。グレーを基調とした落ち着いたトーンの中に、山吹色のアクセントカラーで温かみを加えます。

### キーワード
- 洗練 (Sophisticated)
- 信頼 (Trustworthy)
- クリーン (Clean)
- 余白の美 (Beauty of Space)
- 静寂 (Tranquility)

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
- 12カラムグリッド
- ギャップ: 24px
- レスポンシブブレークポイント:
  - モバイル: < 640px
  - タブレット: 640px - 1024px
  - デスクトップ: > 1024px

## 6. コンポーネント仕様

### ヘッダー
- 高さ: 80px
- 背景: rgba(250, 250, 250, 0.85)
- ぼかし効果: backdrop-filter: blur(8px)
- 影: 0 1px 0 var(--color-border)
- スティッキー配置
- ロゴサイズ: 高さ40px

### ボタン
```css
/* プライマリボタン */
.btn-primary {
  background: var(--color-accent);
  color: var(--color-white);
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px hsla(39, 73%, 63%, 0.3);
}

/* セカンダリボタン */
.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border);
  padding: 10px 30px;
  border-radius: 8px;
}
```

### カードUI
```css
.card {
  background: var(--color-white);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px var(--color-shadow);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.08);
}
```

### フォーム要素
```css
.form-input {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 12px 16px;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: var(--color-accent);
  outline: none;
}
```

## 7. アニメーション

### トランジション
```css
--transition-fast: 0.15s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease-in-out;
```

### ホバーエフェクト
- ボタン: translateY(-2px) + 影の強化
- カード: translateY(-4px) + 影の強化
- リンク: カラー変更（アクセントカラーへ）

### スクロールアニメーション
- フェードイン: opacity 0→1
- スライドアップ: translateY(20px)→0
- 実行タイミング: 要素が画面内に入った時

## 8. インタラクション

### マイクロインタラクション
- ボタンホバー: 少し上に移動 + 影
- フォームフォーカス: ボーダーカラー変更
- リンクホバー: アンダーライン表示

### スクロール演出
- パララックス効果: 背景画像をゆっくり移動
- ヘッダー: スクロール時に背景をぼかし

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
- タッチターゲット: 最小44px × 44px
- フォントサイズ: 基本16px以上
- 余白: PCの60-70%に調整
- 1カラムレイアウトへの変更

## 10. アクセシビリティ

- コントラスト比: WCAG AAレベル以上
- フォーカスインジケータ: 明確に表示
- 代替テキスト: すべての画像に設定
- セマンティックHTML: 適切な要素を使用

## 11. パフォーマンス

- 画像最適化: WebP形式、遅延読み込み
- CSS: 未使用のスタイルを削除
- フォント: サブセット化、display: swap
- アニメーション: will-changeの適切な使用

## 12. 実装メモ

### Tailwind CSS設定
- カスタムカラーパレットの定義
- フォントファミリーの追加
- スペーシングスケールのカスタマイズ
- コンポーネントクラスの作成

### Astro設定
- Layout.astroで共通レイアウト定義
- コンポーネント分割で再利用性向上
- 画像最適化の有効化
- サイトマップ自動生成