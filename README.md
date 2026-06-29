# 和太鼓早春の陣トップページについて
このプロジェクトは、[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) を使用して作成された [Next.js](https://nextjs.org) アプリケーションです。

---

## 1. はじめ方
まずは、このリポジトリを個人PCにダウンロードするところから始めましょう。
Githubを使いたくてもよくわからない方は、[入門編ページ](https://qiita.com/T4SH1R0/items/336c05a2617d04edd714)を参照してみてください。きっと参考になりますよ～！

個人PCのどのフォルダ内に作るかを決めたのち、そのフォルダ内にてGit Bashを開いてください。
その後、このリポジトリのURLをコピーし、ターミナルにて以下を打ち込んでみましょう。

```bash
git clone コピーしたリポジトリのURL
```

最初に一度だけ、npmコマンドを有効にするために[`node.js`](https://nodejs.org/ja/download)をインストールします。
きちんとダウンロードできたら、このファイルがある階層にて、ターミナルを開き以下を実行します。

```bash
npm install
```

以下を実行することで、開発サーバーを起動します。

``` powershell
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

開発サーバーが無事に起動できたら、ブラウザで以下にアクセスしてください：
 [http://localhost:3000](http://localhost:3000)


## 2. 編集方法
VSCodeにて編集することを推奨します。
フォントについては、[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) を使用し、 vercelの[Geist](https://vercel.com/font) を最適化して読み込まれます。
作業を始める前に、mainブランチを最新の状態にします。

```bash
git checkout main
git pull origin main
```

次に、新しいブランチを立ち上げましょう。ブランチ名は、英文字と一部の記号が使えます。

```bash
git branch "適当なbranch名"
git checkout "適当なbranch名"
```

次に、編集していきます。
必ず、上記のように開発サーバーを起動し、オフラインにてファイルを編集、保存し、問題なく動いていることを確認してください。
次にadd、コミット、プッシュの順で既存ファイルを作成したブランチにアップロードしていきます。

```bash
git add .
git commit -m "編集内容"
git push -u origin "適当なbranch名"
```

※初回のみ、 `-u origin`を付けます。2回目以降は`git push`のみで構いません。
その後、GitHub上でPull Requestを作成し、レビュー後にMergeしましょう。

### 2.1 変更する必要があるもの
今後、主に変更する必要があるものは以下の3点です。

- 特設ページのURL
- ポスター画像の追加・変更
- SNS投稿のURL

#### 2.1.1 特設ページURLの変更手順
`app > components > About.tsx` を開いてください。
ファイルの上部に、以下のような記述があると思います。

``` tsx
import Image from "next/image";
import { kaisei, mincho, hinaMincho } from '@/app/fonts';

const nexteventpage = "#"; //特設ページができたら、ここにURLを入れてください
const previouseventpage = "https://25th-soushun.vercel.app/";
```

`nexteventpage` は次回の特設ページURL、`previouseventpage` は過去の特設ページURLを指定するための変数です。
現在、`nexteventpage` は `"#"` になっています。新しい特設ページのURLが決まったら、`"#"` の部分を該当するURLに変更してください。

例：

```tsx
const nexteventpage = "https://example.com/";
```

#### 2.1.2 ポスター画像の追加・変更
まず、ポスター画像サイズを小さくして保存しておいてください。
次に、そのポスター画像を`public > image > posters > `の中に入れましょう。
次に、`app > components > History.tsx` を開いてください。
ファイルの中間に、以下のような記述があると思います。

``` tsx
export function History() {
  const posters = [
    { src: "/image/posters/06_poster.jpg", label: "第6回 和太鼓「早春の陣」", date: "2007年3月3日" },
    { src: "/image/posters/07_poster.jpg", label: "第7回 和太鼓「早春の陣」", date: "2008年3月8日" },
    { src: "/image/posters/08_poster.jpg", label: "第8回 和太鼓「早春の陣」", date: "2009年3月7日" },
    { src: "/image/posters/09_poster.jpg", label: "第9回 和太鼓「早春の陣」", date: "2010年3月6日" },
    { src: "/image/posters/10_poster.jpg", label: "第10回 和太鼓「早春の陣」", date: "2011年3月6日" },
    { src: "/image/posters/11_poster.jpg", label: "第11回 和太鼓「早春の陣」", date: "2012年3月3日" },
    { src: "/image/posters/12_poster.jpg", label: "第12回 和太鼓「早春の陣」", date: "2013年3月9日" },
    { src: "/image/posters/13_poster.jpg", label: "第13回 和太鼓「早春の陣」", date: "2014年3月1日" },
    { src: "/image/posters/14_poster.jpg", label: "第14回 和太鼓「早春の陣」", date: "2015年3月1日" },
    { src: "/image/posters/15_poster.jpg", label: "第15回 和太鼓「早春の陣」", date: "2016年2月27日" },
    { src: "/image/posters/16_poster.jpg", label: "第16回 和太鼓「早春の陣」", date: "2017年3月5日" },
    { src: "/image/posters/17_poster.jpg", label: "第17回 和太鼓「早春の陣」", date: "2018年2月28日" },
    { src: "/image/posters/18_poster.jpg", label: "第18回 和太鼓「早春の陣」", date: "2019年3月3日" },
    { src: "/image/posters/19_poster.jpg", label: "第19回 和太鼓「早春の陣」（online）", date: "2020年3月1日" },
    { src: "/image/posters/23_poster.jpg", label: "第23回 和太鼓「早春の陣」", date: "2024年3月3日" },
    { src: "/image/posters/24_poster.jpg", label: "第24回 和太鼓「早春の陣」", date: "2025年3月9日" },
    { src: "/image/posters/25_poster.jpg", label: "第25回 和太鼓「早春の陣」", date: "2026年3月8日" },
  ];
```

記述ルールに則って、編集してください。

例：

```tsx
    { src: "/image/posters/25_poster.jpg", label: "第25回 和太鼓「早春の陣」", date: "2026年3月8日" },
    { src: "/image/posters/26_poster.jpg", label: "第26回 和太鼓「早春の陣」", date: "2027年2月28日" },
```

#### 2.1.3 SNS投稿のURL
`app > components > SNS.tsx` を開いてください。
ファイルの上部に、以下のような記述があると思います。

``` tsx
declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

// 投稿URLを定数として定義
const Instagram_POST_URL = "https://www.instagram.com/p/DV7aAPLE1v4/?img_index=1"
const X_POST_URL = "https://x.com/sousyunnojin/status/1841674543464591567"
```

`Instagram_POST_URL` はInstagramの投稿ページのURLを、`X_POST_URL`はXの投稿ページのURLを入れております。
随時変更をお願いいたします！


## 3. 学習リソース
- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIについて学べます。
- [Learn Next.js](https://nextjs.org/learn) - 対話型Next.jsチュートリアルです。
- [the Next.js GitHub repository](https://github.com/vercel/next.js) - Next.jsのGitHubリポジトリです。

## 4. デプロイ
デプロイとは、ITの分野では「システムにおいてファイルを実際のWebサーバ上に配置して利用できる状態にすること」を意味します。
つまり、全世界に公開するということです。
Next.jsアプリのデプロイは、Vercelの利用が最も簡単です。
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## 5. 詳細
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
