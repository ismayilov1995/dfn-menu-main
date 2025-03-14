// fonts
import { notoSans } from "@/fonts/fonts";
// images
import logoDark from "@/../public/images/dfn_logo_dark.svg";
// modules
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const classes = {
    closing: `border-t`,
    container: `container mx-auto bg-[var(--copyright-bg)] py-16 px-5 flex flex-col items-center gap-12 border-b`,
    copyRight: `container mx-auto bg-[var(--copyright-bg)] py-8 px-5 mb-8 text-center text-[var(--copyright-text)] ${notoSans.className}`,
    followButton: `relative inline-block text-[var(--follow-button-text)] border border-[var(--follow-button-border)] py-[0.8rem] px-[1.2rem] transition-all hover:text-[var(--follow-button-text-hover)] hover:bg-[var(--follow-button-bg-hover)] active:scale-[0.97]`,
};

export default async function ClosingSection() {
    const t = await getTranslations("HomePage.footer");

    return (
        <section id="closing" className={classes.closing}>
            <div className={classes.container}>
                <Image src={logoDark} alt={"Dolce Far Niente Logo"} width={170} height={100} />
                <a className={classes.followButton} href="https://www.instagram.com/dfnbaku/" target="_blank">
                    {t("instagram")}
                </a>
            </div>
            <div className={classes.copyRight}>Copyright &copy; 2024 Dolce Far Niente</div>
        </section>
    );
}
