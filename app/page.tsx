'use client';

import { useState } from 'react';

import { Opening } from "./components/Opening";
import { About } from "./components/About";
import { Performer } from "./components/Performer";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { History } from "./components/History";
import { SNS } from "./components/SNS";
import "./page.css"

export default function Home() {
  const [opening, setOpening] = useState(true);

  return (
    <>
      {opening && <Opening onFinish={() => setOpening(false)} />}

      {/* 固定背景 */}
      <div className="fixed inset-0 -z-10 bg-[#f4f2f3]">
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
          <div className="bubble-layer" />
        </div>
      </div>
      
      <div
        className={`
          transition-opacity duration-700
          ${opening ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      >
        <Header />
        <Hero />

        <main className="relative px-0 min-h-screen">
          <About />
          <Performer />
          <History />
          <SNS />
        </main>

        <Footer />
      </div>
    </>
  );
}
