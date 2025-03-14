"use client";
// styles
import "react-datepicker/dist/react-datepicker.css";
// types
import { type DateInputPropsType } from "@/types/props-types";
// hooks
import { useLocale } from "next-intl";
// modules
import DatePicker, { registerLocale } from "react-datepicker";
import { addMonths } from "date-fns";
import { az, enGB, ru } from "date-fns/locale";

export default function DateInput({ placeholder, startDate, onChangeHandler, name, required }: DateInputPropsType) {
    const locale = useLocale();

    registerLocale("en", enGB);
    registerLocale("ru", ru);
    registerLocale("az", az);

    return (
        <DatePicker
            autoComplete="off"
            name={name}
            locale={locale}
            selected={startDate}
            placeholderText={placeholder}
            minDate={new Date()}
            monthsShown={1}
            maxDate={addMonths(new Date(), 3)}
            onChange={onChangeHandler}
            required={required}
        />
    );
}
