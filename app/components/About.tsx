import Image from "next/image";
import { kaisei, mincho, hinaMincho } from '@/app/fonts';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* 黄色帯 */}
      <div
        className="
          absolute
          top-0
          left-1/2
          z-0
          h-[360px]
          w-[160vw]
          -translate-x-1/2
          rounded-b-[50%]
          bg-[#E8C15A]
          pointer-events-none
        "
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 pt-10">
        <div className="grid md:grid-cols-2 items-start">
          <div className={`${hinaMincho.className} text-md md:text-lg leading-relaxed space-y-5 pt-8 tracking-[0.1em]`}>
            <p>和太鼓「早春の陣」は、</p>
            <p>毎年春に開催される<wbr></wbr>和太鼓演奏会です。<wbr></wbr></p>
            <p>
              <ruby>悠久太鼓<rt>ゆうきゅうだいこ</rt>愛好会<rt>あいこうかい</rt>鶴亀会<rt>つるかめかい</rt></ruby>
              と<wbr></wbr>
              <ruby>輪太鼓衆<rt>わだいこしゅう</rt>転太鼓舞<rt>てんてこまい</rt></ruby>
              が<wbr></wbr>
            </p>
            <p>中心となって開催しています。</p>
          </div>
          <div className="relative flex justify-center">
            <img
              src="/image/turukameUsagi.svg"
              alt=""
              aria-hidden="true"
              className="w-[360px] md:w-[500px] translate-x-20 translate-y-5 md:-translate-y-10"
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-10">
        <div>
          <h2 className={`${hinaMincho.className} text-center text-4xl md:text-5xl tracking-[0.12em] text-[#9b4650] mb-20`}>
            公演について
          </h2>
        </div>

        <div className={`${hinaMincho.className} max-w-6xl mx-auto`}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              {/* 開催日時 */}
              <div className="flex border-b border-stone-400 py-4">
                <div className="w-35 shrink-0">
                  <p className="text-2xl">開催日時</p>
                  <p className="text-md">（目安）</p>
                </div>
                <div className="flex-1 text-xl">
                  <p>2月下旬〜3月初旬</p>
                  <p>昼頃に開演</p>
                </div>
              </div>
              {/* 会場 */}
              <div className="flex py-4">
                <div className="w-35 shrink-0">
                  <p className="text-2xl">会場</p>
                </div>
                <div className="flex-1 text-xl">
                  <p>アオーレ長岡</p>
                  <p>市民交流ホールA</p>
                  <p>〒940-0061</p>
                  <p>新潟県長岡市大手通<br />１丁目４番地１０</p>
                </div>
              </div>
              {/* スペーサー */}
              <div className="mt-8 mb-8" />
              {/* 特設ページ */}
              <div className="pt-6">
                <p className="text-[#9b4650] text-xl md:text-2xl mb-4 text-center tracking-[0.12em]">特設ページ</p>
                <div className="flex flex-col gap-5">
                  <a
                    href="#"
                    aria-disabled="true"  //特設ページができたら、hrefを更新してこの行を消してください
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#12183a] hover:bg-[#9b4650] text-white py-2 rounded-full transition-colors duration-300 text-center text-md tracking-wider shadow-md shadow-black/50"
                  >
                    次回のページへ※準備中※
                  </a>
                  <a
                    href="https://25th-soushun.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#12183a] hover:bg-[#9b4650] text-white py-2 rounded-full transition-colors duration-300 text-center text-md tracking-wider shadow-md shadow-black/50"
                  >
                    前回（第25回）のページへ
                  </a>
                </div>
              </div>
            </div>

            {/* 太鼓の画像 */}
            <div className="relative flex justify-center md:justify-start overflow-visible">
              <img
                src="/image/taikoOnly.png"
                alt=""
                aria-hidden="true"
                className="w-[350px] md:w-[720px] max-w-none md:translate-x-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}