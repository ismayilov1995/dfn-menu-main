"use client";
// styles
import styles from "./nav-item.module.css";
// types
import { type NavItemPropsType } from "@/types/props-types";
// modules
import { Link, usePathname } from "@/i18n/routing";

export default function NavItem({ href, text }: NavItemPropsType) {
    const pathName = usePathname();

    const classes = {
        li: `flex-1 lg:flex-none ${styles.navItem} ${pathName.endsWith(href) ? `${styles.active}` : ""}`,
        link: `w-full relative inline-block p-5 text-center lg:text-[var(--navigation-link)] text-2xl lg:text-lg xl:text-2xl transition-all before:content-[""] before:block before:absolute before:top-0 before:left-0 before:w-0 before:h-0.5 before:bg-[var(--navigation-link-hover)] before:transition-all hover:text-[var(--navigation-link-hover)] hover:before:w-full lg:text-left lg:w-auto`,
    };

    return (
        <li className={classes.li}>
            <Link className={classes.link} href={href} scroll={false}>
                {text}
            </Link>
        </li>
    );
}
