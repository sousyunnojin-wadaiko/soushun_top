import Image from "next/image";
import { kaisei, mincho, hinaMincho } from '@/app/fonts';

export function Performer() {
  return (
    <section id="performer" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-20">
        <h2 className={`${hinaMincho.className} text-center text-4xl md:text-5xl tracking-[0.12em] text-[#9b4650] mb-20`}>
          出演団体
        </h2>

        <div className={`${hinaMincho.className} max-w-6xl mx-auto px-4 md:px-8`}>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-16 items-start">
            {/* つるかめ紹介 */}
            <div className="pt-2">
              <h3 className="text-center text-2xl md:text-2xl tracking-[0.12em] mb-4">
                悠久太鼓愛好会 鶴亀会
              </h3>
              <p className="text-center text-sm md:text-base leading-[2] tracking-[0.06em]">
                長岡技術科学大学の和太鼓サークルです。<br />
                長岡市内を中心に各種イベントや<br />
                老人ホーム等の施設に訪問して演奏しています。<br />
                また大花火大会で有名な"長岡まつり"をはじめ、<br />
                夏のお祭りシーズンにおいては連日フル活動!!<br />
                長岡市の至る所で我々の姿が見られるハズです!
              </p>
            </div>

            {/* 区切り線 */}
            <div className="hidden md:block w-px h-65 bg-stone-500/70" />

            {/* てんてこ紹介 */}
            <div className="pt-2">
              <h3 className="text-center text-2xl md:text-2xl tracking-[0.12em] mb-4">
                輪太鼓衆 転太鼓舞
              </h3>
              <p className="text-center text-sm md:text-base leading-[2] tracking-[0.06em]">
                長岡造形大学の和太鼓サークルです。<br />
                私たちは「輪になって楽しく太鼓を叩こう!」を<br />
                コンセプトに、日々太鼓練習に打ち込んでいます。<br />
                長岡市を中心として、県内各地のイベントや<br />
                お祭りに参加し、元気よく活動中です。<br />
                かけ声はいつも...「ちょいさー!」</p>
            </div>
          </div>
        </div>
        {/* スペーサー */}
        <div className="h-20"/>
      </div>
    </section>
  );
}