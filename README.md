# react_study
React勉強会用リポジトリ

## 勉強会でターゲット
- Reactがはじめて（業務でいじったことがない）
- Reactが人気あるっていうのは知ってるけど、なんで人気なのかよくわからない
- Jqueryと何が違うの…？
- React触ってみたい（どんなものか気になる）

## 今日の勉強会について
- 入退場自由です。本日使用したスライド、サンプルコードは後ほど公開します。
- 今回のハンズオンでは、「**TypeScript**」は未使用とします。  
※ 今後のReact勉強会では、TypeScriptガンガン使います。
- 開発環境の構築を忘れた・できなかった、上手くできなかった
  - そんな人の為に、「**CodeSandBox**」でオンライン環境作ってますので、そちらをお使いください。
 
- What's TypeScript?
  - JavaScriptを拡張して作られたプログラミング言語
  - TypeScriptで書かれたコードをコンパイルするとJavaScriptのコードに変換される
  - https://typescript-jp.gitbook.io/deep-dive/
  - https://future-architect.github.io/typescript-guide/
 ```
 TypeScriptは、 最終的にJavaScriptにコンパイルされます。実際に実行されるのは、JavaScriptです。
 開発をするときは、TypeScriptを書きますが、ブラウザで実行する時には、TypeScriptをコンパイルして作成されたJavaScriptを実行する
 ```

## 勉強会のタイムスケジュール
- React概要（15分）
- ハンズオン（45分）
- 質疑応答（10～15分）

最短1時間、最長でも1時間半

# React概要
## イントロダクション
- Reactの技術的な説明に入る前に、まずはイントロダクション。
- Reactに関してよく耳にすること等をチェック！

### React：JSフレームワーク界隈ではトレンドNo.1
【**Stack Overflow Trends**】: Stack Overflow でのタグ数の比較  
https://insights.stackoverflow.com/trends?tags=reactjs%2Cvue.js%2Cangular%2Cangularjs  

### Reactで何ができるか？

### SPAについて

## React - 技術説明
- Reactで作るSPAアプリケーションの仕組み
- Reactで実装するとどうなるか？


**React.jsとは何か？**
- Facebook製のJavascriptライブラリ
  - 「A JavaScript library for building user interfaces」：UIを構築するためのライブラリ
  - FacebookやInstagram, YahooやAirbnbなど多くの採用事例あり

- Reactがやること
```
1. ページ状態を保持している「プレーンな JavaScript のオブジェクト」に、
2. 「テンプレート的な関数」を作用させて、「仮想 DOM」と呼ばれるDOM の設計図を取り出し、
3. その設計図を使って本物の DOM を構築する。
```
