"use client";

import Image from "next/image";
import { useEffect, useState} from "react";
import { kaisei, mincho, hinaMincho } from '@/app/fonts';
import { ChevronDown } from "lucide-react";

import hero1 from '@/public/image/heros/hero_01.jpg';
import hero2 from '@/public/image/heros/hero_02.jpg';
import hero3 from '@/public/image/heros/hero_03.jpg';
import hero4 from '@/public/image/heros/hero_04.jpg';

const heroImages = [hero1, hero2, hero3, hero4];
const chars = ['和', '太', '鼓', '早', '春', 'の', '陣'];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const startTimer = setTimeout(() => {

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= chars.length) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 300);

  }, 3000);

  return () => clearTimeout(startTimer);
  }, []);
  
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* 背景スライドショー */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="和太鼓演奏"
            className={`
              absolute inset-0 h-full w-full object-cover
              transition-opacity duration-1000
              ${index === current ? 'opacity-80' : 'opacity-0'}
            `}
            priority={index === 0}
          />
        ))}
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-20 h-full flex flex-col items-center px-4 text-white">
        <div className="pt-35 text-center space-y-8 max-w-4xl">
          <div className='flex justify-center flex-wrap py-4 gap-4'>
            <div className={`${hinaMincho.className} text-4xl md:text-5xl lg:text-6xl tracking-wider writing-mode-vertical`}>
              {chars.map((char, index) => (
                <span
                  key={index}
                  className={`
                    inline-block
                    mx-[0.1em]
                    transition-opacity duration-700
                    ${index < visibleCount ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          w-10 h-10
          rounded-full
          bg-white/30 backdrop-blur-sm
          flex items-center justify-center
          text-white
          hover:bg-white/40
          transition-all
          animate-bounce
        "
        aria-label="スクロールダウン"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </div>
  );
}