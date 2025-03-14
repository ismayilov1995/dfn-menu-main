// types
import { type BurgerButtonPropsType } from "@/types/props-types";
// modules
import { IoMdClose } from "react-icons/io";

export default function BurgerButton({ menuOpen, onButtonClick }: BurgerButtonPropsType) {
    const classes = {
        button: `flex flex-col w-12 h-12 rounded-full justify-center items-center bg-[var(--burger-button-bg)] cursor-pointer`,
        span: `h-0.5 w-6 mb-1.5 last:mb-0 bg-[var(--burger-button-text)]`,
        icon: {
            color: "var(--burger-button-text)",
            fontSize: "2rem",
        },
    };

    return (
        <div className={classes.button} onClick={onButtonClick}>
            {!menuOpen && (
                <>
                    <span className={classes.span}></span>
                    <span className={classes.span}></span>
                    <span className={classes.span}></span>
                </>
            )}

            {menuOpen && <IoMdClose style={classes.icon} />}
        </div>
    );
}
