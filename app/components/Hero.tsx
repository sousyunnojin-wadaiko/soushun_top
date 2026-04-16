import hero from '@/public/image/hero.jpg';
import Image from "next/image";
import { kaisei, mincho } from '@/app/fonts';

export function Hero() {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* 前景：メイン画像 */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <Image
          src={hero}
          alt="和太鼓演奏"
          className="h-full w-full object-cover opacity-80"
          priority
        />
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-20 h-full flex flex-col items-center px-4 text-white">
        <div className="pt-48 text-center space-y-8 max-w-4xl">
          <div className="space-y-4 bg-black/40 shadow-[0_0_30px_20px_rgba(0,0,0,0.4)]">
            <div className='flex justify-center flex-wrap py-4 gap-4'>
              <div className={`${kaisei.className} text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider`}>
                <ruby>和太鼓<rt className="text-xs md:text-sm">わだいこ</rt></ruby>
              </div>
              <div className={`${kaisei.className} text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider`}>
                <ruby>早春の陣<rt className="text-xs md:text-sm">そうしゅんのじん</rt></ruby>
              </div>
            </div>
            <div className="space-y-2">
              <p className={`${kaisei.className} text-2xl md:text-2xl tracking-widest text-cyan-300`}>
                トップページへようこそ
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}