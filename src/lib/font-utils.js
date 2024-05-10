import { Instrument_Sans, Fraunces } from "next/font/google";
const figtree_init = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-figtree",
});

const fraunces_init = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fraunces",
});

export const figtree = figtree_init.variable;
export const fraunces = fraunces_init.variable;
