### 段落
>段落は1つ以上の連続したテキストであり、空行によって分けられる  通常の段落をスペースやタブでインデントしてはならない

```
これは段落です。

これは別の段落です。
```
```html
<p>これは段落です。</p>
<p>これは別の段落です。</p>
```

---

### 改行
>テキストに挿入された改行は最終的な結果から取り除かれる。  これは、画面の大きさに応じて改行を行う処理は  Webブラウザが担当すべきであるという設計思想による。 強制的に改行したい場合は、行末に2つのスペースを挿入すればよい

```
これは段落です。右にSpaceが２つあります。  
これは同じ段落です。
```
```html
<p>これは段落です。右にSpaceが２つあります。<br>
これは同じ段落です。</p>
```

---

### 強調
*Italic* もしくは _Italic_

**Blod** もしくは __Blod__

***Bold&Italic*** もしくは ___Bold&Italic___

~~Strikethrough~~
```
*Italic* もしくは _Italic_

**Bold** もしくは __Bold__

***Bold&Italic*** もしくは ___Bold&Italic___
```
```html
<p>
  <em>Italic</em> もしくは <em>Italic</em>
</p>

<p>
  <strong>Blod</strong> もしくは <strong>Blod</strong>
</p>

<p>
  <strong>Bold&Italic</strong> もしくは <strong>Bold&Italic</strong>
</p>
```

---

### 引用
> "このテキストは、HTMLのblockquote要素に囲まれます。  
> blockquote要素はreflowableです。テキストを好きなように  
> 改行することができます。改行したとしても、  
> 変換後はひとつのblockquote要素として扱われます。"
> 
```
> "このテキストは、HTMLのblockquote要素に囲まれます。  
blockquote要素はreflowableです。テキストを好きなように  
改行することができます。改行したとしても、  
変換後はひとつのblockquote要素として扱われます。"
```
```html
<blockquote>
  <p>
    "このテキストは、HTMLのblockquote要素に囲まれます。<br>
    blockquote要素はreflowableです。テキストを好きなように<br>
    改行することができます。改行したとしても、<br>
    変換後はひとつのblockquote要素として扱われます。"
  </p>
</blockquote>
```

---

### リスト
* 順序無しリストのアイテム
    * サブアイテムはタブもしくは4つのスペースでインデントする
      * サブアイテムはタブもしくは4つのスペースでインデントする
* 順序無しリストの別のアイテム
```
* 順序無しリストのアイテム
    * サブアイテムはタブもしくは4つのスペースでインデントする
      * サブアイテムはタブもしくは4つのスペースでインデントする
* 順序無しリストの別のアイテム

or

+ 順序無しリストのアイテム
    + サブアイテムはタブもしくは4つのスペースでインデントする
      + サブアイテムはタブもしくは4つのスペースでインデントする
+ 順序無しリストの別のアイテム

or

- 順序無しリストのアイテム
    - サブアイテムはタブもしくは4つのスペースでインデントする
      - サブアイテムはタブもしくは4つのスペースでインデントする
- 順序無しリストの別のアイテム
```
```html
<ul>
  <li>順序無しリストのアイテム
    <ul>
      <li>サブアイテムはタブもしくは4つのスペースでインデントする
        <ul>
          <li>サブアイテムはタブもしくは4つのスペースでインデントする</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    順序無しリストの別のアイテム
  </li>
</ul>
```
1. 順序付きリストのアイテム
    1. サブアイテムはタブもしくは4つのスペースでインデントする
       1. サブアイテムはタブもしくは4つのスペースでインデントする
2. 順序付きリストの別のアイテム
```
1. 順序付きリストのアイテム
    1. サブアイテムはタブもしくは4つのスペースでインデントする
      1. サブアイテムはタブもしくは4つのスペースでインデントする
2. 順序付きリストの別のアイテム
```
```html
<ol>
  <li>順序付きリストのアイテム
    <ol>
      <li>サブアイテムはタブもしくは4つのスペースでインデントする
        <ol>
          <li>サブアイテムはタブもしくは4つのスペースでインデントする</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>
    順序無しリストの別のアイテム
  </li>
</ol>
```
---

### コード
>コード（等幅フォントで整形される）を含める場合、インラインコードは、  
「`some code`」のようにバッククオート (U+0060) で囲むことになる。

これは段落です。文中に`コードテキスト`を含みます。
```
これは段落です。文中に`コードテキスト`を含みます。
```
```html
<p>
  これは段落です。文中に<code>コードテキスト</code>を含みます。
</p>
```


>複数行にまたがるコードは、タブもしくは4つ以上のスペースを行頭に書くか、  3つずつのバッククオートでコード全体をくくる。  開始を表すバッククオートの3つ目に続けて、任意で言語名を明記することができる。

    1行目
    2行目
    3行目
```js
(() => {
  'use strict';

  console.log('Hello world');
})();
```
```html
<pre>
  <code class="language-js">(() =&gt; {
    'use strict';
  
    console.log('Hello world');
    })();
  </code>
</pre>
```
言語指定  
`bash`  
`batch`  
`cpp` (C/C++ 向け)  
`css`  
`html`  
`java`  
`js` (JavaScript 向け)  
`json`  
`php`  
`python`  
`sql`  
`svg`  
`xml`  
`wasm` (WebAssembly テキスト書式向け)

`example-good`: 良い例としてスタイル付けする  
`example-bad`: 悪い例としてスタイル付けする  
`hidden`: このコードブロックをページに表示しません

>Markdownは通常、改行や連続したスペースを削除するため、インデントやコードの  レイアウトを壊す可能性があるが、この場合 Markdownは空白をすべて保持する。

---

### 水平線
>1行の中に、3つ以上のハイフンやアスタリスク・アンダースコアだけを並べると水平線が作られる。ハイフンやアスタリスクのあいだには空白を入れてもよい。以下の行はすべて水平線を生成する。

* * *

***

*****

- - -

---------------------------------------
```
* * *

***

*****

- - -

---------------------------------------
```
```html
<hr>(全て)
```

---

### リンク
[リンクのテキスト](https://placehold.jp/150x150.png)
```
[リンクのテキスト](https://placehold.jp/150x150.png)
```
```html
<p>
  <a href="https://placehold.jp/150x150.png">リンクのテキスト</a>
</p>
```

>参照目的のリンクとして、脚注として段落外に含めることもできる。

```html
[linkref]: リンクのアドレス "リンクのタイトル"
```

---

### テーブル
| Left align | Center align | Right align |
|:-----------|:------------:|------------:|
| This       | This         | This        |
| column     | column       | column      |
| will       | will         | will        |
| be         | be           | be          |
| left       | right        | center      |
| aligned    | aligned      | aligned     |

---

### 画像
>画像は以下のように埋め込める。リンクの冒頭に ! が付いている形式である。

![Altのテキスト](https://placehold.jp/150x150.png)
![Altのテキスト]("パス未指定")
```
![Altのテキスト](https://placehold.jp/150x150.png)
![Altのテキスト]("パス未指定")
```
```html
<p>
  <img src="https://placehold.jp/150x150.png" alt="Altのテキスト">
</p>
```
---

### バックスラッシュによるエスケープ
>Markdownが書式化コマンドとして解釈する文字は、バックスラッシュ（U+005C, 日本では円記号に見える環境もある）を加えることによって、その文字そのものとして解釈させることができる。例えば\*は\*テキスト強調の開始ではなくアスタリスクとして出力される。

```
Markdownが書式化コマンドとして解釈する文字は、
バックスラッシュ（U+005C, 日本では円記号に見える環境もある）を  
加えることによって、その文字そのものとして解釈させることができる。  
例えば\*は\*テキスト強調の開始ではなくアスタリスクとして出力される。
```

---

### 折りたたみ
<details><summary>サンプルコード</summary>

```html
<h1>Hello</h1>
```
</details>

---

### インラインHTML
>生のHTMLのブロックレベル要素の中にあるテキストに対してMarkdownはいかなる変換も行わないので、HTMLのブロックレベル要素のタグでテキストを囲むことによって、Markdownのソース文章の中にHTMLのセクションを加えることもできる。

<font color="red">赤</font>
```
<font color="red">赤</font>
```
