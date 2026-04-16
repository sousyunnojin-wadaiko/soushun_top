// app/fonts.ts
import { Kaisei_Decol, Zen_Old_Mincho } from 'next/font/google';
import localFont from 'next/font/local';

export const kaisei = Kaisei_Decol({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const mincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400'],
});

export const tamanegi = localFont({
  src: './fonts/tamanegi_kaisho_free.ttf',
});

export const tamanegi_geki = localFont({
  src: './fonts/tamanegi_kaisho_geki.ttf',
});