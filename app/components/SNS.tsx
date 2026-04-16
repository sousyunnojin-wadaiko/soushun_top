"use client";


import Script from "next/script";
import { kaisei, mincho } from '@/app/fonts';
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

// Instagramの投稿URLを定数として定義
const INSTAGRAM_POST_URLS = [
  "https://www.instagram.com/p/DV7aAPLE1v4/?img_index=1",
  "https://www.instagram.com/p/DUIBVAQkcFK/?img_index=1",
]

export function SNS() {
  useEffect(() => {
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="sns" className="py-20 px-4 md:px-8">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm?.Embeds) {
            window.instgrm.Embeds.process();
          }
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className=" gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-cyan-700 text-center tracking-[0.2em] text-sm mb-2">Social media</p>
                <h2 className={`${kaisei.className} text-center text-3xl md:text-4xl text-cyan-300 mb-4`}>
                  SNS情報
                </h2>
              </div>

              <p className="text-white leading-relaxed text-center">
                Instagramやってます！最新情報はそちらで発信していきますので、ぜひフォローしてください！
              </p>

              {/* Instagramの投稿埋め込みURLを少し変えて */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {INSTAGRAM_POST_URLS.map((url) => (
                  <blockquote
                    key={url}
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{
                      background:"#FFF",
                      border:0,
                      borderRadius: "5px",
                      boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                      margin: "1px auto",
                      maxWidth: "440px",
                      minWidth:"300px",
                      padding:0,
                      width: "calc(100% - 2px)",
                    }}
                  >
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background:"#FFFFFF", 
                        lineHeight:1.4,
                        padding:"20px",
                        textAlign:"center",
                        textDecoration:"none",
                        width:"100%",
                        display: "block",
                        color:"#666",
                      }}>
                      Instagramの投稿を見る
                    </a>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}