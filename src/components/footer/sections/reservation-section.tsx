// fonts
import { alexBrush, greatVibes } from "@/fonts/fonts";
//modules
import ReservationForm from "./reservation-form";
import Overlay from "@/components/utils/overlay";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ReservationSection() {
    const locale = await getLocale();
    const t = await getTranslations("HomePage.footer");

    const classes = {
        container: `container relative mx-auto border-lr py-16 px-5 flex justify-center bg-[url("../../public/images/header-bg.jpg")] bg-center bg-scroll lg:bg-fixed bg-no-repeat bg-cover`,
        content: `relative w-full lg:w-6/12 xl:w-5/12 text-center`,
        h4: `text-[var(--reservation-heading)] text-2xl mb-5 lg:mb-8 lg:text-[2.7rem]`,
        h2: `uppercase text-[var(--reservation-heading)] mb-8 lg:mb-8`,
    };

    if (locale === "ru") {
        classes.h4 += ` ${greatVibes.className}`;
        classes.h2 += ` text-3xl sm:text-[3rem]`;
    } else {
        classes.h4 += ` ${alexBrush.className}`;
        classes.h2 += ` text-4xl sm:text-[4rem] lg:text-[3.5rem] xl:text-[4rem]`;
    }

    return (
        <section id="reservation" className={classes.container}>
            <Overlay />
            <div className={classes.content}>
                <h4 className={classes.h4}>{t("helperText")}</h4>
                <h2 className={classes.h2}>{t("mainText")}</h2>
                <ReservationForm />
            </div>
        </section>
    );
}
