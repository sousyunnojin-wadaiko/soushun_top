"use client";


import Script from "next/script";
import { kaisei, mincho, hinaMincho } from '@/app/fonts';
import { useEffect } from "react";

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

export function SNS() {
  useEffect(() => {
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section
      id="sns"
      className={`${hinaMincho.className} relative overflow-hidden py-20 px-4 md:px-8`}
    >
      {/* 左上の雲 */}
      <img
        src="/image/cloudLeft.svg"
        alt=""
        aria-hidden="true"
        className="
          absolute top-0 left-0 z-10 w-[80px] md:w-[300px]
          pointer-events-none select-none
          translate-x-[-20%] translate-y-[280%] md:translate-y-[60%]
        "
      />
      {/* 右上の雲 */}
      <img
        src="/image/cloudRight.svg"
        alt=""
        aria-hidden="true"
        className="
          absolute top-0 right-0 z-10 w-[100px] md:w-[400px]
          pointer-events-none select-none
          translate-x-[20%] translate-y-[230%] md:translate-y-[50%]
        "
      />
      {/* 一番下の画像 */}
      <img
        src="/image/underimage.svg"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-0 w-full pointer-events-none select-none"
      />

      <div className="relative z-20 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl tracking-[0.12em] text-[#9b4650] mb-6">
          SNS 情報
        </h2>

        <p className="text-center text-sm md:text-base leading-[2] tracking-[0.08em] mb-16">
          Instagram と X やってます！最新情報はこちらで
          <br />
          発信していきますので、ぜひフォローしてください！
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-4xl mx-auto">
          {/* Instagram */}
          <div className="relative z-20 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <img src="/image/instaLogo.svg" alt="Instagramlogo" className="w-15 h-15" />
              <div>
                <p className="text-lg tracking-[0.12em]">Instagram</p>
                <p className="text-sm">@sousyunnojin</p>
                <a
                  href="https://www.instagram.com/sousyunnojin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-700 underline"
                >
                  https://www.instagram.com/sousyunnojin
                </a>
              </div>
            </div>

            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={Instagram_POST_URL}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: "1px solid #d6d3d1",
                borderRadius: "0",
                margin: "0 auto",
                maxWidth: "100%",
                minWidth: "0",
                width: "100%",
              }}
              >
              <a
                href={Instagram_POST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagramの投稿を見る
              </a>
            </blockquote>
            <Script
              src="https://www.instagram.com/embed.js"
              strategy="lazyOnload"
              onLoad={() => {
                window.instgrm?.Embeds?.process();
              }}
            />
          </div>

          {/* X */}
          <div className="relative z-20 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <img src="/image/xLogo.svg" alt="Xlogo" className="w-15 h-15 invert" />
              <div>
                <p className="text-lg tracking-[0.12em]">X（旧Twitter）</p>
                <p className="text-sm">@sousyunnojin</p>
                <a
                  href="https://x.com/sousyunnojin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-700 underline"
                >
                  https://x.com/sousyunnojin
                </a>
              </div>
            </div>
            <blockquote
              className="twitter-tweet"
              data-lang="ja"
            >
              <a
                href={X_POST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Xの投稿を見る
              </a>
            </blockquote>
            <Script
              src="https://platform.twitter.com/widgets.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </div>
    </section>
  );
}