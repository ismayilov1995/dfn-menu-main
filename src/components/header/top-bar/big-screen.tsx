// modules
import LanguageSwitch from "@/components/utils/language-switch";
import Brand from "./brand";
import Navigation from "./navigation/navigation";
import ReservationButton from "./reservation-button/reservation-button";
import { getTranslations } from "next-intl/server";

export default async function BigScreen() {
    const t = await getTranslations("HomePage.header");

    const classes = {
        bigScreen: `hidden lg:grid lg:grid-cols-3 items-center`,
        div: `flex justify-end items-center`,
    };

    return (
        <div className={classes.bigScreen}>
            <Navigation />
            <Brand />
            <div className={classes.div}>
                <LanguageSwitch />
                <ReservationButton text={t("reservationText")} />
            </div>
        </div>
    );
}
