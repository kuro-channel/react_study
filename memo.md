---
marp: true
---
# Why?React?
- なぜReactなのか？
  - JavaScriptの歴史を学ぶ

# How?React?
 - Reactの概要
---
# JavaScriptの歴史
---
## 1. JavaScriptの誕生～第一次ブラウザ戦争
### JavaScript: 1995年誕生
- **NetScape Communications**社によって開発
- Netscape Navigater2.0に実装
- 最初は「**LiveScript**」という名前だったが、当時人気のあった「**Java**」にあやかり「**JavaScript**」に変更した
<!-- ※ Netscape Navigater: webブラウザ -->
### Microsoft: 1996年 Internet Explorer3.0にJavascript実装
- Microsoftによる実装は「**JScript**」と呼ばれた
- NetScapeとは別の独自機能追加等も行っていた
- 開発者はそれぞれのブラウザに対応するサイトを作る必要があった
<!-- 開発者泣かせ・・・-->
---
## 2. JavaScriptの標準化 
### なぜ、JavaScriptに標準化が必要なのか？
- JavaScriptはブラウザ向けのスクリプト言語として開発 → ブラウザがJavaScriptの言語を解釈しないといけない
- ブラウザは各企業が独自に開発している
- 独自仕様を実装したりしていたので互換性に乏しかった

### ECMAScriptの誕生
<!-- 
  NetScape社が問題提起
-->
- JavaScriptのよりよい発展を目指して**ECMAScript**の誕生
- 標準化団体: ECMA Internationalによって標準化された
- **JavaScriptの中核となる言語仕様** / **JavaScript** = **ECMAScriptに準拠した言語**
<!-- 
  普段、ECMAScriptを意識することはあまりないかも
-->
---
## JavaScriptとECMAScript（参照：JavaScript Primer)
https://jsprimer.net/basic/introduction/

- JavaScript: 色々な実行環境がある
- ECMAScript = どの実行環境でも共通な動作のみが定義されている

![width:550px](https://drive.google.com/uc?export=view&id=1nXggN-dSxlhUikSW1cvNsn-qhmMQuN34)

<!--
  ECMAScript: どの実行環境でも共通の動作をする。
  実行環境によって、それぞれ機能が異なる！

  ブラウザだけでなく、JavaScriptは多くの実行環境で動くようになっています。

  1. ブラウザではUI（ユーザーインターフェース）を操作するためのJavaScriptの機能（機能、プロパティ）が定義されています。後、DOM操作（doment.getElementById()等 , アラートを出す為のwindow.alert）

  2. サーバー言語: Node.js → UI操作は不要。サーバサイド言語として必要な機能は実装されていません。

  JavaScript、といっても一口に全ての機能が全ての実行環境で使えるわけではない！
-->
---
### 第一次ブラウザ戦争の結果
- 1990年代後半, NetscapeとInternet Exploreの激しいシェア争いの結果、Internet Exploreが勝利！

### JavaScript暗黒期
- JavaScriptの実装に絡んだブラウザのセキュリティホールが断続的に見つかる
- JavaScript起因のクラッシュ、悪用ウイルスの多発
- JavaScriptへの悪いイメージが定着
https://currents.google.com/communities/101745672472327891411

---
## 3. JavaScriptの復権：Ajaxの登場, jQueryの誕生

### 2005年：Ajax × Google Maps
- Ajaxの登場によって、再びJavaScriptが注目を集める。

![width:500px](https://drive.google.com/uc?export=view&id=1ufomJh6ft6CRkzxQAzNvRXlMf-lM5nhP)

<!-- 
  地図を移動する（イベント）
  　→ Ajax通信（動かした分だけ、非同期通信）
  　→ リッチなUI＆UXが構築できる。

Ajax仕組み
 1. クライアントからリクエスト（index.html,js）
 2. イベント発火 → リクエスト（非同期）→ Json返却
 3. JSonを用いて、DOM操作：該当場所のみ画面を変更

ヘッダー＆フッターは「再レンダリングしない」！
コンテンツ部分だけ、レンダリング（最小限のレンダリング）
ページ全体をレンダリングしない
-->
---
### 2006年：jQueryの誕生
- 「**write less, do mode**」 少ない記述で多くの実装ができる
  - クライアントサイドプログラミングの敷居を圧倒的に下げる
  - DOM操作, イベント処理, クロスブラウザ対応（jQueryで差異を吸収）
  - Ajaxとの相性も抜群！
  - JavaScript = **jQuery**
<!-- 
  jQueryがあればそこそこ色々できる
  今でもjQueryは有効
  
  当時はブラウザ間のJavaScriptの実装に無視できないほどの差異があった：それを吸収してくれるjQueryの利便性が評価された
-->

## 4.第二次ブラウザ戦争
- 五択の戦争: IE, Google Chrome, Firefox, Safari, Opera
https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E6%88%A6%E4%BA%89#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Usage_share_of_web_browsers_(Source_StatCounter).svg

---
# ここまでのおさらい
- JavaScriptはあくまで「**ブラウザ**」で動く前提だった
- **Ajax × jQuery** でインタラクティブなUI×UXの実現が可能になった

# ここからのお話
- JavaScriptの進化
  - JavaScriptがサーバサイド（=ブラウザ外で）としても使われるようになる（**Node.js, npm**）
- JavaScript = ビルドが前提になってくる
- 脱JQuery → Reactへ・・・

---
## 5. JavaScriptの発展
### Node.js の誕生
- 2009年 ライアン・ダールによって作られた
- ブラウザから独立したJavaScript実行環境
- Googleが開発した**Google V8 JavaScript Engine**という高速なJavaScriptエンジンが元になっている
- サーバサイド開発で用いられるようになる

**＜参考＞**
【ブラウザレンダリングにおけるJavaScript実行環境】
https://zenn.dev/ak/articles/c28fa3a9ba7edb#%E5%85%A8%E4%BD%93%E5%9B%B3

<!--
  サーバサイドのJavaScriptとフロントに何の関係があるのか？
-->
---
### npm (モジュール/パッケージ管理システム)の台頭
- 当時の言語としての問題: **名前空間が1つしかない**/**依存関係が管理しずらい** 
- 読み込み順が前後してしまうだけでバグがでてしまう…
```javascript
<!-- jQuery を前提にjQuery UIが作られている-->
<script src="./jquery.js"></script>
<script src="./jquery-ui.js"></script>
```
- node.js独自のモジュール・パッケージ管理システムである「**npm**」が発展
- Webサーバとしてサーバーサイドで活用され始める（yahoo, Linkedln, Paypal）

### モジュール：名前空間の問題を解決

### パッケージ：npm（パッケージ管理システム）で解決
---
## モジュールについて
- 1995年の誕生から長い間ずっと、JavaScriptにはコードから他のファイルを読み込む仕組み：**モジュール**という仕組みがなかった
  - あるモジュールの関数を別のモジュールから呼び出す等・・・
- Node.jsでモジュールの仕組みが導入され、現在は**ECMAScript**でモジュールが定義されている
 https://jsprimer.net/basic/module/
- 1ファイル1モジュールが基本
<!-- 
   ECMAScriptという仕様では、どの実行環境でも共通な動作のみが定義されているため、基本的にどの実行環境でも同じ動作

   モジュールがない時は、名前が被ってしまい、バグが起きていたりした
-->
- **moduleサンプルコード**
https://codesandbox.io/s/moduletesuto-2mmr7?file=/index.html

---
## npm（パッケージ管理システム）について
- パッケージ: パッケージとは**package.json**で記述されたファイルやディレクトリ
<!-- 使用したい・共有したいライブラリ（機能）の単位 ＝ パッケージ -->
- JavaScriptの便利ライブラリのインストールをコマンドで行えるもの
- 依存関係の解決

**npm よく使うコマンドまとめ**
https://qiita.com/standard-software/items/2ac49a409688733c90e7

**npmってなんですか？**
https://sho03.hatenablog.com/entry/2021/02/01/194409

---
![width:700px](https://drive.google.com/uc?export=view&id=1Flz-EsjE4SldHEkId9DAaVKx87QCXxeg)

---
### Node.js クライアント開発（React開発）でどう関係してくるの？
- バックエンド開発の為にnpmは使われるパッケージ管理システムであったが、**フロントエンド用のパッケージ**を提供するのに使われるようになった
<!-- 昔はWebアプリケーション専用のパッケージ管理システムがあったが、廃れてしまった-->

- React等、JSフレームワークでの大規模開発となると、様々なパッケージが必要になり、そのパッケージ達が特定のバージョンで依存し合っている

- トランスコンパイル（変換処理）・バンドル（まとめる）→ **ブラウザが解釈可能な状態に変換してくれる**

**【参考】**
なぜReactアプリ開発でNode.jsが必要なのか 
https://qiita.com/rpf-nob/items/6823fb8728754386ef30#%E3%81%AA%E3%81%9Creact%E3%82%A2%E3%83%97%E3%83%AA%E9%96%8B%E7%99%BA%E3%81%A7nodejs%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AA%E3%81%AE%E3%81%8B

---
![width:1200px](https://drive.google.com/uc?export=view&id=1xbbMiSCjLUCtHFHNLMTtFhEwpJeFM3DO)

---
![width:1000px](https://drive.google.com/uc?export=view&id=1hBNArAbLX6fJmhpgEXEnQoSAfoc3QWfh)

---
### 導入方法
https://tech-brook.com/525/
![width:1400px](https://drive.google.com/uc?export=view&id=1O0n0mGNuz9vOWmzP_J5JPGp9lCsM2rg8)

---
### ECMAScriptをより詳しく
<!-- 
  2015年前後で策定プロセスがことなるので注意！
-->
- ECMAScript 2015年: ES2015（第6版）
  - 2015年からは毎年仕様策定がリリースされている
  - ECMAScriptのバージョンの歴史 : https://jsprimer.net/basic/ecmascript/

- 言語としての進化
  - jQueryを使わずに、標準仕様に準拠したJavaScriptで開発しよう
  - ECMAScriptに準拠した各JavaScriptライブラリ・フレームワークの台頭

---
## 6. Why? React? : なぜReact（フレームワーク）で開発するのか？
- JavaScriptは言語として進化している
  - **Reactは特にJavaScript標準の記法・考え方を重視している**
  → JavaScript構文をしっかり押さえていれば習得しやすい かつ 応用が効きやすい（JavaScriptがベースにあるので）
  - 標準のJavaScriptが使いやすくなった（非同期通信等） https://jsprimer.net/use-case/ajaxapp/promise/

- SPAを開発しやすい（**Single Page Application**）
  - 初回ロードで必要なリソースをまとめて読み込む
  - ユーザーの操作に応じて、動的にUIを書き換える。ページ遷移における再読み込み（ロード）がない。 例: Facebook, GoogleMap etc…
  https://www.oro.com/ja/technology/001/
  
  - API開発（バックエンド開発）と分業が可能

---
### 続き
- 仮想DOM
  - 以前: ```HTML（DOM）= 操作する対象```
  - JSX: ```HTML（DOM）= 拡張されたJavascript（JSX）の値（ファーストオブジェクト）```
  - よりDOMを扱いやすくなる 
  - 直接DOMを更新するのではなく, JavaScriptのオブジェクトで仮想DOMツリーを実現 → **仮想DOM変更前と仮想DOM変更後の差分を計算して本DOMを更新**
  ※ 詳細は次のスライドで紹介

- その他、Reactの特徴「状態管理」「コンポーネント指向」「宣言的View」etc…
- **トランスコンパイル＆バンドル** = JavaScriptを気軽にビルドできるようになった
  - TypeScript等、AltJSも組み合わせて開発＆保守しやすくする
---
# Reactの概要
---
### 仮想DOM
  - key を付与して差分が検知できるようにする
  - 

![width:800px](https://drive.google.com/uc?export=view&id=18p_neeJeekrdmc61tZKU2by7wpnn2o0f)

---
### 宣言的View
**手続き型（jQuery）**
  - DOM（Document Object Model）を直接いじって動的ページを生成する。
  - 見た目（HTML）と操作（JavaScript）が分離していて、何をやったら何がどう変更されるか把握しにくい。
  - あちこちから画面が参照・更新され、どこでどのような影響が出るかが分かりにくい傾向がある。
https://codesandbox.io/s/lt-sample-1-forked-q6kx8?file=/src/App.js

---
### 宣言的View
**宣言的（React）**
https://codesandbox.io/s/lt-sample-1-forked-pk90o?file=/src/App.js
- HTMLの中に JavaScript が書かれていて、見た目と動作が同じ場所に書かれている
- アプリの内部状態がこの状態だったら、この見た目になるべし
- 見た目と動作の分離を防ぐソースコードが書ける

### コンポーネントベース
- Webページやアプリケーションの構成単位を細かい部品単位で作成し、作成した部品を組み合わせていくのが構築手法。
- コンポーネント化することで再利用が可能
