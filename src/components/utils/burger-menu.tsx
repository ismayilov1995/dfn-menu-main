// types
import { type BurgerMenuPropsType } from "@/types/props-types";
import { type LegacyRef } from "react";
// hooks
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
// modules
import Navigation from "@/components/header/top-bar/navigation/navigation";
import LanguageSwitch from "./language-switch";
import ReservationButton from "@/components/header/top-bar/reservation-button/reservation-button";

export default function BurgerMenu({ onClickOutside }: BurgerMenuPropsType) {
    const ref: LegacyRef<HTMLDivElement> = useRef(null);

    useEffect(() => {
        const handleClickOutside: EventListener = (ev: Event) => {
            const target = ev.target as Node;

            if (ref.current && !ref.current.contains(target)) {
                setTimeout(() => onClickOutside && onClickOutside(), 100);
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => document.removeEventListener("click", handleClickOutside, true);
    }, [onClickOutside]);

    const t = useTranslations("HomePage.header");

    const classes = {
        menu: `absolute w-full bottom-[-15rem] left-0 bg-[var(--burger-menu-bg)] z-30`,
    };

    return (
        <div ref={ref} className={classes.menu}>
            <LanguageSwitch listIsVisibile />
            <ReservationButton alignButton="center" text={t("reservationText")} />
            <Navigation />
        </div>
    );
}
