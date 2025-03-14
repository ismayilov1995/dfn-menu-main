//modules
import { Alex_Brush, Baskervville, Bebas_Neue, Great_Vibes, Noto_Sans } from "next/font/google";
import localFont from "next/font/local";

export const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
});

export const alexBrush = Alex_Brush({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
});

export const notoSans = Noto_Sans({
    subsets: ["latin", "cyrillic"],
    display: "swap",
    weight: ["400", "500"],
});

export const baskervVille = Baskervville({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
});

export const baskervVilleCyrillic = localFont({ src: "../../public/fonts/BaskervilleCyrLTStd-Upright.woff2" });
export const baskervVilleAzeri = localFont({ src: "../../public/fonts/Baskerville.woff2" });

export const greatVibes = Great_Vibes({
    subsets: ["latin", "latin-ext", "vietnamese"],
    display: "swap",
    weight: ["400"],
});
