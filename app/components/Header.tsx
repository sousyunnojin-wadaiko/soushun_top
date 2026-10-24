"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { hinaMincho } from "@/app/fonts";
import styles from "./Header.module.css";

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

  // アンカーリンクのスムーズスクロール
  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu = true
  ) => {
    if (closeMenu) {
      setIsMobileMenuOpen(false);
    }

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
      className={`${hinaMincho.className} ${styles.header} ${isScrolled || isMobileMenuOpen ? styles.solid : ""}`}
    >
      <div className={styles.inner}>
        {/* ロゴ */}
        <h3 className={styles.logo}>
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
          className={styles.desktopNav}
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
          className={`${styles.menuButton} ${isMobileMenuOpen ? styles.open : ""}`}
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
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.visible : ""}`}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={(event) => handleClick(event, item.href, false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
