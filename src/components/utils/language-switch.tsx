"use client";
//hooks
import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
// modules
import React, { startTransition } from "react";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/routing-types";
import { LanguageSwitchPropsType } from "@/types/props-types";

export default function LanguageSwitch({ listIsVisibile = false }: LanguageSwitchPropsType) {
    const classes = {
        div: `uppercase relative mb-4 lg:mb-0 lg:me-5 xl:me-10`,
        span: `hidden lg:inline-block relative transition-all text-[var(--language-switch-text)] hover:text-[var(--language-switch-text-hover)] text-lg cursor-pointer`,
        ul: `static text-center lg:z-40 lg:top-[30px] lg:left-[-4px] lg:absolute lg:bg-[var(--language-select-bg)]`,
        li: `inline-block text-xl lg:text-sm py-4 px-6 lg:py-3 lg:px-2 transition-all hover:bg-[var(--language-link-bg-hover)] cursor-pointer`,
    };

    const [listVisible, setListVisible] = useState(listIsVisibile);

    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function handleClick() {
        setListVisible(true);
    }

    function handleSelect(ev: React.MouseEvent<HTMLElement>) {
        const element = ev.target as HTMLLIElement;
        const nextLocale = element.innerText as Locale;

        startTransition(() => {
            router.replace(
                {
                    pathname,
                },
                {
                    scroll: false,
                    locale: nextLocale.toLowerCase(),
                }
            );
            setListVisible(false);
        });
    }

    return (
        <div className={classes.div}>
            <span onClick={handleClick} className={classes.span}>
                {locale}
            </span>
            {listVisible && (
                <ul className={classes.ul}>
                    {routing.locales.map((loc) => {
                        if (loc !== locale)
                            return (
                                <li key={loc} onClick={handleSelect} className={classes.li}>
                                    {loc}
                                </li>
                            );
                    })}
                </ul>
            )}
        </div>
    );
}
