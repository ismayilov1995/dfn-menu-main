"use client";
// hooks
import { useEffect, useState } from "react";
// modules
import React from "react";
import BurgerButton from "@/components/utils/burger-button";
import Brand from "./brand";
import BurgerMenu from "@/components/utils/burger-menu";

export default function SmallScreen() {
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        console.log(menuVisible);
    }, [menuVisible]);

    function handleClick() {
        setMenuVisible((prevState) => !prevState);
    }

    const classes = {
        smallScreen: `grid grid-cols-1 items-center lg:hidden`,
        brand: `pt-2 pb-8`,
        div: `flex justify-center relative`,
    };

    return (
        <div className={classes.smallScreen}>
            <Brand className={classes.brand} imgWidth={250} imgHeight={125} />
            <div className={classes.div}>
                <BurgerButton menuOpen={menuVisible} onButtonClick={handleClick} />
                {menuVisible && <BurgerMenu onClickOutside={() => setMenuVisible(false)} />}
            </div>
        </div>
    );
}
