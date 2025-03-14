// styles
import styles from "./reservation-button.module.css";
// types
import { ReservationButtonPropsType } from "@/types/props-types";

export default function ReservationButton({ type = "link", text, alignButton = "right", href = "#reservation", disabled = false }: ReservationButtonPropsType) {
    if (disabled)
        return (
            <div className={`${styles.reservationButton} text-${alignButton}`}>
                <span>{text}</span>
            </div>
        );

    let buttonContent = <a href={`${href}`}>{text}</a>;

    if (type === "submit") buttonContent = <button>{text}</button>;

    return <div className={`${styles.reservationButton} text-${alignButton}`}>{buttonContent}</div>;
}
