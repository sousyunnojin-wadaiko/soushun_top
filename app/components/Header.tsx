"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { hinaMincho } from "@/app/fonts";

// ナビゲーション項目（Astro版と統一）
const menuItems = [
    { label: '公演について', href: '#about' },
    { label: '出演団体', href: '#performer' },
    { label: '歴史', href: '#history' },
    { label: 'SNS情報', href: '#sns' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // スクロール位置によるヘッダー背景の変更
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // リロード時のスクロール位置も反映
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // PC表示に切り替わったらモバイルメニューを閉じる
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1110) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Escapeキーでメニューを閉じる
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // アンカーリンクのスムーズスクロール
  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMobileMenuOpen(false);

    // ページ最上部への移動
    if (href === "#top") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const target = document.getElementById(href.slice(1));

    if (!target) return;

    event.preventDefault();

    const offsetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      80;

    window.scrollTo({
      top: Math.max(0, offsetTop),
      behavior: "smooth",
    });
  };

  return (
    <header
      id="header"
      className={`
        ${hinaMincho.className}
        fixed top-0 z-50 w-full
        text-base font-normal leading-[1.8]
        tracking-normal text-[#eeeef4]
        transition-all duration-300
        ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/80"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }
      `}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* ロゴ */}
        <h3 className="m-0 text-2xl font-normal leading-[1.4]">
          <a
            href="#top"
            onClick={(event) => handleClick(event, "#top")}
          >
            和太鼓 早春の陣
          </a>
        </h3>

        {/* PC用ナビゲーション */}
        <nav
          aria-label="メインナビゲーション"
          className="hidden items-center gap-6 min-[1110px]:flex"
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

       
        {/* ハンバーガーボタン */}
        <button
          type="button"
          className={`
            menubutton relative z-[60] h-10 w-10 shrink-0
            min-[1110px]:hidden
            ${isMobileMenuOpen ? "open" : ""}
          `}
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
          }}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={
            isMobileMenuOpen
              ? "メニューを閉じる"
              : "メニューを開く"
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* モバイル用ナビゲーション */}
      <nav
        id="mobile-menu"
        aria-label="モバイルナビゲーション"
        aria-hidden={!isMobileMenuOpen}
        className={`
          absolute right-0 top-full
          flex w-1/2 flex-col gap-5
          bg-black/80 px-6 py-6
          transition-transform duration-300 ease-in-out
          min-[1110px]:hidden
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "pointer-events-none translate-x-full"
          }
        `}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={(event) => handleClick(event, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
