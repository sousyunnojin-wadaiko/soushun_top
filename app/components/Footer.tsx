import { tamanegi_geki } from '@/app/fonts';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className={`${tamanegi_geki.className} text-2xl mb-4 tracking-wider`}>和太鼓「早春の陣」</h3>
          </div>

          <div>
            <h4 className="text-cyan-400 mb-3 tracking-wide">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  公演について
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-400 hover:text-white transition-colors duration-300">
                  歴史
                </a>
              </li>
              <li>
                <a href="#sns" className="text-gray-400 hover:text-white transition-colors duration-300">
                  SNS情報
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cyan-400 mb-3 tracking-wide">お問い合わせ</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>和太鼓「早春の陣」実行委員会</p>
              <p>
                <a href="mailto:sousyunnojin.wadaiko@gmail.com" className="hover:text-white transition-colors duration-300">
                  sousyunnojin.wadaiko@gmail.com
                </a>
              </p>
              <p className="pt-2">
                <a
                  href="https://instagram.com/sousyunnojin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram: @sousyunnojin
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 和太鼓「早春の陣」実行委員会. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
