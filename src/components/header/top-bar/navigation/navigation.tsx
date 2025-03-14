"use client";
// hooks
import { useTranslations } from "next-intl";
// types
import { type NavItemPropsType } from "@/types/props-types";
// modules
import NavItem from "./nav-item/nav-item";

export default function Navigation() {
    const t = useTranslations("navigations");

    const classes = {
        nav: `mt-8 lg:mt-0 text-xl font-medium`,
        ul: `flex justify-start gap-x-0 lg:gap-x-0 xl:gap-x-4`,
    };

    const navs: NavItemPropsType[] = [
        { href: "/", text: t("meals") },
        { href: "/drinks", text: t("drinks") },
        { href: "/breakfast", text: t("breakfast") },
    ];

    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                {navs.map((nav) => (
                    <NavItem key={nav.href} href={nav.href} text={nav.text} />
                ))}
            </ul>
        </nav>
    );
}
