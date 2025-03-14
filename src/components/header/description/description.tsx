// fonts
import { alexBrush, greatVibes } from "@/fonts/fonts";
// modules
import { getLocale, getTranslations } from "next-intl/server";

export default async function Description() {
    const locale = await getLocale();
    const t = await getTranslations("HomePage.header");

    const classes = {
        description: "relative text-center pt-[2rem] pb-[6rem] sm:pt-[5rem] sm:pb-[10rem]",
        p: "text-2xl sm:text-[2.5rem] mb-4 sm:mb-6 text-[var(--description-paragraph)]",
        h1: "tracking-[0.5rem] text-[var(--description-header)] pl-[0.5rem] uppercase text-5xl sm:text-9xl",
    };

    if (locale === "ru") classes.p += ` ${greatVibes.className}`;
    else classes.p += ` ${alexBrush.className}`;

    return (
        <section id="description" className={classes.description}>
            <p className={classes.p}>{t("helperText")}</p>
            <h1 className={classes.h1}>{t("mainText")}</h1>
        </section>
    );
}
