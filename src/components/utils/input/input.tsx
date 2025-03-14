"use client";
// styles
import styles from "./input.module.css";
// hooks
import { useState } from "react";
// types
import { type InputPropsType } from "@/types/props-types";
// modules
// import { PhoneInput } from "react-international-phone";
import DateInput from "./date-input";

export default function Input({
    name,
    id = name,
    placeholder,
    required = false,
    type = "text",
    min,
    max,
    selectBox,
    // onPhoneChange,
    // phoneValue,
    // isValid,
    errors,
}: InputPropsType) {
    const [numberValue, setNumberValue] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);

    const handleChange = (date: Date | null) => {
        if (date) setStartDate(date);
    };

    function handleInput(ev: React.ChangeEvent<HTMLInputElement>) {
        if (type !== "number") return;

        const value = ev.target.value;

        if (value === "") {
            setNumberValue("");
            return;
        }

        if (max && +value > max) setNumberValue(`${max}`);
        else if (min && +value < min) setNumberValue(`${min}`);
        else setNumberValue(value);
    }

    // if (name === "phoneNumber" && type !== "number")
    //     return (
    //         <>
    //             <PhoneInput
    //                 className="flex items-center"
    //                 placeholder={placeholder}
    //                 required={required}
    //                 defaultCountry="az"
    //                 value={phoneValue}
    //                 onChange={onPhoneChange}
    //             />
    //             {!isValid && <span className={styles.errors}>{t("invalidPhone")}</span>}
    //         </>
    //     );

    let input = (
        <input
            onInput={handleInput}
            type={type}
            value={type === "number" ? numberValue : undefined}
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            min={min ?? undefined}
            max={max ?? undefined}
        />
    );

    if (type === "select" && selectBox) {
        input = (
            <select id={id} name={name} required>
                <option value="0">{selectBox.title}</option>
                {selectBox.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        );
    }

    if (type === "date") {
        input = <DateInput name={name} startDate={startDate} onChangeHandler={handleChange} placeholder={placeholder} required={required} />;
    }

    return (
        <div className={styles.formControl}>
            {input}
            {errors &&
                errors.map((error) => (
                    <span key={error} className={styles.errors}>
                        {error}
                    </span>
                ))}
        </div>
    );
}
