import { kaisei, mincho, hinaMincho } from '@/app/fonts';

export function Footer() {
  return (
    <footer className={`${hinaMincho.className} bg-[#190F07] text-white py-10 px-6`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_220px_320px] gap-10 text-sm md:text-base">
        {/* 左 */}
        <div>
          <h3 className="text-xl md:text-2xl tracking-[0.18em]">
            和太鼓　早春の陣
          </h3>
        </div>

        {/* 中央 */}
        <div>
          <p className="mb-3 tracking-[0.12em] text-lg md:text-xl">リンク</p>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:opacity-70">公演について</a></li>
            <li><a href="#performers" className="hover:opacity-70">出演団体</a></li>
            <li><a href="#history" className="hover:opacity-70">歴史</a></li>
            <li><a href="#sns" className="hover:opacity-70">SNS 情報</a></li>
          </ul>
        </div>

        {/* 右 */}
        <div>
          <p className="mb-3 tracking-[0.12em] text-lg md:text-xl">お問い合わせ</p>
          <div className="space-y-2">
            <p>和太鼓「早春の陣」実行委員会</p>
            <a
              href="mailto:sousyunnojin.wadaiko@gmail.com"
              className="block hover:opacity-70 break-all"
            >
              sousyunnojin.wadaiko@gmail.com
            </a>
            <a
              href="https://instagram.com/sousyunnojin"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-70"
            >
              Instagram: @sousyunnojin
            </a>
            <a
              href="https://x.com/sousyunnojin"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-70"
            >
              X: @sousyunnojin
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-stone-600 pt-5 text-center mt-5">
        <p>
          © 2026 和太鼓「早春の陣」実行委員会. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
