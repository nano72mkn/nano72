# nano72 デザインシステム設計書

## デザインコンセプト
モダンで洗練された旅行サイトのようなデザインを目指します。大きな写真、柔らかい角丸、グラデーション、カード型レイアウトを活用します。

## カラーパレット

### プライマリカラー
- **メインオレンジ**: #ff8c00（nano72のブランドカラー）
- **ライトオレンジ**: #ffa726
- **ダークオレンジ**: #e65100

### ニュートラルカラー
- **ホワイト**: #ffffff
- **オフホワイト**: #fafbfc
- **ライトグレー**: #f6f8fa
- **ミディアムグレー**: #e1e4e8
- **ダークグレー**: #586069
- **ブラック**: #24292e

### アクセントカラー
- **ブルー**: #0366d6（リンク・アクション）
- **グリーン**: #28a745（成功・完了）
- **イエロー**: #ffd33d（注目・新機能）

## タイポグラフィ

### フォントファミリー
- **見出し**: 'M PLUS Rounded 1c', sans-serif（丸みのある親しみやすいフォント）
- **本文**: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif

### フォントサイズ
- **ヒーローテキスト**: 48px〜64px
- **大見出し（h1）**: 36px〜40px
- **中見出し（h2）**: 28px〜32px
- **小見出し（h3）**: 20px〜24px
- **本文**: 16px
- **キャプション**: 14px

### フォントウェイト
- **見出し**: 700（Bold）
- **サブ見出し**: 600（Semi-bold）
- **本文**: 400（Regular）
- **軽い強調**: 500（Medium）

## レイアウト

### スペーシング
- **基本単位**: 8px
- **セクション間**: 80px〜120px
- **要素間**: 24px〜48px
- **カード内パディング**: 32px〜40px

### 角丸
- **大きなカード**: 16px〜24px
- **標準カード**: 12px〜16px
- **ボタン**: 8px〜12px
- **入力フィールド**: 8px
- **小さな要素**: 4px

### 最大幅
- **コンテナ**: 1200px
- **テキストコンテンツ**: 800px
- **カード幅**: 360px〜400px

## コンポーネント

### ヒーローセクション
- **高さ**: 60vh〜80vh
- **背景**: 大きな写真またはグラデーション
- **オーバーレイ**: 半透明のグラデーション
- **テキスト**: 白または明るい色
- **CTA**: 目立つボタン

### カード
- **背景**: 白
- **影**: 0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.04)
- **ホバー時**: 影を強く、わずかに持ち上げる
- **画像**: カード上部に配置、角丸あり

### ボタン
- **プライマリ**: オレンジ背景、白テキスト
- **セカンダリ**: 白背景、オレンジボーダー
- **パディング**: 12px 32px
- **トランジション**: 0.3s ease
- **ホバー**: 明度を変更、影を追加

### ナビゲーション
- **背景**: 白または半透明
- **固定ヘッダー**: スクロール時に背景を追加
- **リンク**: ホバー時に下線またはカラー変更

## アニメーション

### トランジション
- **標準**: 0.3s ease
- **高速**: 0.15s ease-out
- **低速**: 0.5s ease-in-out

### ホバー効果
- **カード**: translateY(-4px)、影の強化
- **ボタン**: 背景色の変更、スケール(1.02)
- **画像**: スケール(1.05)、明度調整

### スクロールアニメーション
- **フェードイン**: opacity 0→1、translateY(20px)→0
- **スライドイン**: translateX(±50px)→0
- **スケール**: scale(0.9)→1

## レスポンシブデザイン

### ブレークポイント
- **デスクトップ**: 1200px以上
- **タブレット**: 768px〜1199px
- **モバイル**: 767px以下

### モバイル対応
- **フォントサイズ**: デスクトップの85%
- **スペーシング**: デスクトップの75%
- **カラム**: 1カラムレイアウト
- **画像**: 100%幅

## 実装例

### ヒーローセクション
```css
.hero {
  height: 70vh;
  background: linear-gradient(135deg, rgba(255, 140, 0, 0.9) 0%, rgba(255, 167, 38, 0.8) 100%);
  border-radius: 0 0 50px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
```

### カードコンポーネント
```css
.card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
```

### グラデーションボタン
```css
.btn-primary {
  background: linear-gradient(135deg, #ff8c00 0%, #ffa726 100%);
  color: white;
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}
```

## まとめ
このデザインシステムは、nano72のブランドアイデンティティを保ちながら、モダンで洗練された印象を与えることを目指しています。大きな写真、柔らかい角丸、美しいグラデーション、そして適切な余白を使用することで、プロフェッショナルで親しみやすいデザインを実現します。