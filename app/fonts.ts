// app/fonts.ts
import {
  Kaisei_Decol,
  Zen_Old_Mincho,
  Hina_Mincho,
} from 'next/font/google';

export const kaisei = Kaisei_Decol({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const mincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400'],
});

export const hinaMincho = Hina_Mincho({
  subsets: ['latin'],
  weight: ['400'],
});
