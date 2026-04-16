import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { History } from "./components/History";
import { SNS } from "./components/SNS";
import "./page.css"

export default function Home() {
  return (
    <>
      {/* 固定背景 */}
      <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
  <div className="bubble-layer" />
</div>
<div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/background.jpg')",
          }}
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <Header />
      <Hero />

      <main className="relative px-4 min-h-screen">
        <About />
        <History />
        <SNS />
      </main>

      <Footer />
    </>
  );
}
