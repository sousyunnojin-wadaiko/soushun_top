import Image from "next/image";
import { kaisei, mincho } from '@/app/fonts';

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className=" gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-cyan-700 text-center tracking-[0.2em] text-sm mb-2">ABOUT</p>
                <h2 className={`${kaisei.className} text-center text-3xl md:text-4xl text-cyan-300 mb-4`}>
                  公演について
                </h2>
              </div>

              <p className="text-white leading-relaxed text-center">
                和太鼓「早春の陣」は、毎年春に開催される和太鼓演奏会です。
              </p>
              <p className="text-white leading-relaxed text-center">
                新潟県長岡市の<ruby>悠久太鼓<rt>ゆうきゅうだいこ</rt>愛好会<rt>あいこうかい</rt>鶴亀会<rt>つるかめかい</rt></ruby>と<ruby>輪太鼓衆<rt>わだいこしゅう</rt>転太鼓舞<rt>てんてこまい</rt></ruby>が中心となって開催しています。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 max-w-xl mx-auto text-center">
                <div className="border-t-4 border-cyan-600 pt-4">
                  <p className="text-sm text-cyan-300 mb-1">開催日時目安</p>
                  <p className="text-white font-bold">2月下旬～3月初旬</p>
                  <p className="text-white text-sm">昼頃に開演</p>
                </div>

                <div className="border-t-4 border-cyan-600 pt-4">
                  <p className="text-sm text-cyan-300 mb-1">会場</p>
                  <p className="text-white font-bold">アオーレ長岡</p>
                  <p className="text-white text-sm">市民交流ホールA</p>
                </div>
              </div>

              {/* 特設ページ */}
              <div className="pt-6 max-w-5xl mx-auto">
                <p className="text-cyan-300 text-xl mb-4 text-center">特設ページ</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-sm transition-colors duration-300 text-center text-lg tracking-wider"
                  >
                    次回のページへ※準備中※
                  </a>
                  <a
                    href="https://25th-soushun.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-sm transition-colors duration-300 text-center text-lg tracking-wider"
                  >
                    前回（第25回）のページへ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}