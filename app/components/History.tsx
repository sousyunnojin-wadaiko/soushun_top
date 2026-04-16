"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { kaisei, mincho } from '@/app/fonts';
import { useEffect } from "react";

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

  const loopedPosters = [
    ...posters.slice(-4),
    ...posters,
    ...posters.slice(0, 4),
  ].reverse();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      startIndex: 4,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();

      setTimeout(() => {
        if (index < 3) {
          emblaApi.scrollTo(index + posters.length, true);
        }

        if (index >= posters.length + 3) {
          emblaApi.scrollTo(index - posters.length, true);
        }
      }, 1000);
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="history" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className=" gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-cyan-700 text-center tracking-[0.2em] text-sm mb-2">HISTORY</p>
                <h2 className={`${kaisei.className} text-center text-3xl md:text-4xl text-cyan-300 mb-4`}>
                  和太鼓「早春の陣」の歴史
                </h2>
              </div>

              <p className="text-white leading-relaxed text-center">
                和太鼓「早春の陣」は、2000年に長岡の和太鼓団体である、悠久太鼓愛好会鶴亀会と輪太鼓衆転太鼓舞が中心となって立ち上がった和太鼓演奏会です。
              </p>
              <p className="text-white leading-relaxed text-center">
                以降、毎年春（2月下旬から3月初旬）に開催されており、2026年には第25回を迎えました。コロナ禍の影響で一時は開催を見送りましたが、今でも長岡の和太鼓を知ってもらうためのイベントを目指し、開催しております。
              </p>

              {/* 過去のポスター */}
              <div className="relative" >
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6 px-6 py-10 overflow-visible">
                  {loopedPosters.map((poster, index) => (
                    <div
                      key={index}
                      className="group flex-shrink-0 w-[250px] flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:z-10"
                    >
                      <Image
                        src={poster.src}
                        alt={poster.label}
                        width={250}
                        height={350}
                        className="h-[350px] w-auto object-contain rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                      />
                      <p className="text-gray-400 text-sm mt-2 text-center">
                        {poster.label}
                        {poster.date && (
                          <>
                            <br />
                            <span className="text-xs text-gray-500">
                              （{poster.date}）
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
                </div>
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
                >
                  ←
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}