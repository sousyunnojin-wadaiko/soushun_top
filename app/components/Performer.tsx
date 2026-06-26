import Image from "next/image";
import { kaisei, mincho, hinaMincho } from '@/app/fonts';

function Keep({ children }: { children: React.ReactNode }) {
  return <span className="inline-block">{children}</span>;
}

export function Performer() {
  return (
    <section id="performer" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-20">
        <h2 className={`${hinaMincho.className} text-center text-4xl md:text-5xl tracking-[0.12em] text-[#9b4650] mb-20`}>
          出演団体
        </h2>

        <div className={`${hinaMincho.className} max-w-6xl mx-auto px-4 md:px-8`}>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-16 items-stretch">
            {/* つるかめ紹介 */}
            <div className="pt-2">
              <h3 className="text-center text-2xl md:text-2xl tracking-[0.12em] mb-4">
                悠久太鼓愛好会 鶴亀会
              </h3>
              <p className="text-center text-sm md:text-base leading-[2] tracking-[0.06em]">
                <Keep>長岡技術科学大学の</Keep>
                <Keep>和太鼓サークルです。</Keep>
                <Keep>長岡市内を中心に</Keep>
                <Keep>各種イベントや</Keep>
                <Keep>老人ホーム等の施設に</Keep>
                <Keep>訪問して演奏しています。</Keep>
                <Keep>また大花火大会で有名な</Keep>
                <Keep>"長岡まつり"をはじめ、</Keep>
                <Keep>夏のお祭りシーズンに</Keep>
                <Keep>おいては連日フル活動!!</Keep>
                <Keep>長岡市の至る所で我々の姿が</Keep>
                <Keep>見られるハズです!</Keep>
              </p>
            </div>

            {/* 区切り線 */}
            <div className="hidden md:block w-px bg-stone-500/70 self-stretch" />

            {/* てんてこ紹介 */}
            <div className="pt-2">
              <h3 className="text-center text-2xl md:text-2xl tracking-[0.12em] mb-4">
                輪太鼓衆 転太鼓舞
              </h3>
              <p className="text-center text-sm md:text-base leading-[2] tracking-[0.06em]">
                <Keep>長岡造形大学の</Keep>
                <Keep>和太鼓サークルです。</Keep>
                <Keep>私たちは</Keep>
                <Keep>「輪になって楽しく</Keep>
                <Keep>太鼓を叩こう!」を</Keep>
                <Keep>コンセプトに、</Keep>
                <Keep>日々太鼓練習に</Keep>
                <Keep>打ち込んでいます。</Keep>
                <Keep>長岡市を中心として、</Keep>
                <Keep>県内各地のイベントや</Keep>
                <Keep>お祭りに参加し、</Keep>
                <Keep>元気よく活動中です。</Keep>
                <Keep>かけ声はいつも...</Keep>
                <Keep>「ちょいさー!」</Keep>
              </p>
            </div>
          </div>
        </div>
        {/* スペーサー */}
        <div className="h-20"/>
      </div>
    </section>
  );
}