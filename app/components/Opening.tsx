'use client';

import { useEffect, useState } from 'react';
import logo from '@/public/image/sousyun_logo.svg';

type Props = {
  onFinish: () => void;
};

export function Opening({ onFinish }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      const finishTimer = setTimeout(() => {
        onFinish();
      }, 0);

      return () => clearTimeout(finishTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-rose-50
        from-slate-100 via-stone-100 to-stone-50
        transition-opacity duration-1000
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="text-center text-white">
        <img
            src={logo.src}
            alt="早春の陣ロゴ"
            className="w-48 md:w-64 mx-auto"
        />
      </div>
    </div>
  );
}