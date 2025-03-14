"use client";
// types
import { type OptionTagType } from "@/types/tag-types";
// actions
import { handleReservation } from "@/actions/actions";
// hooks
import { useFormState } from "react-dom";
import { useLocale, useTranslations } from "next-intl";
// modules
import React from "react";
import Input from "@/components/utils/input/input";
import ReservationButton from "@/components/header/top-bar/reservation-button/reservation-button";
// import { isPhoneValid } from "@/lib/helpers/phone-validator";

const WORKING_HOURS: OptionTagType[] = [
    {
        value: 12,
        text: "12:00",
    },
    {
        value: 13,
        text: "13:00",
    },
    {
        value: 14,
        text: "14:00",
    },
    {
        value: 15,
        text: "15:00",
    },
    {
        value: 16,
        text: "16:00",
    },
    {
        value: 17,
        text: "17:00",
    },
    {
        value: 18,
        text: "18:00",
    },
    {
        value: 19,
        text: "19:00",
    },
    {
        value: 20,
        text: "20:00",
    },
    {
        value: 21,
        text: "21:00",
    },
    {
        value: 22,
        text: "22:00",
    },
    {
        value: 23,
        text: "23:00",
    },
    {
        value: 24,
        text: "24:00",
    },
];

export default function ReservationForm() {
    const locale = useLocale();
    const t = useTranslations();

    const [state, formAction] = useFormState(handleReservation.bind(null, locale), null);

    // function onChangePhone(phone: string) {
    //     return setPhone(phone);
    // }

    return (
        <form action={formAction}>
            <Input errors={state?.errors?.name} name="name" placeholder={t("HomePage.footer.form.nameText")} required />

            {/* <Input
                isValid={isValid}
                name="phoneNumber"
                placeholder={t("HomePage.footer.form.phoneText")}
                phoneValue={phone}
                onPhoneChange={onChangePhone}
                required
            /> */}

            <Input
                errors={state?.errors?.numberOfPerson}
                type="number"
                name="numberOfPerson"
                placeholder={t("HomePage.footer.form.personText")}
                min={1}
                max={100}
                required
            />

            {/* <Input
                errors={state?.errors?.reservationDay}
                type="select"
                name="reservationDay"
                selectBox={{ title: t("HomePage.footer.form.dayText"), options: WEEKDAYS }}
                required
            /> */}

            <Input errors={state?.errors?.reservationDay} type="date" name="reservationDay" placeholder={t("HomePage.footer.form.dayText")} required />

            <Input
                errors={state?.errors?.workingHours}
                type="select"
                name="workingHours"
                selectBox={{ title: t("HomePage.footer.form.hourText"), options: WORKING_HOURS }}
                required
            />

            <ReservationButton
                // disabled={!isValid}
                type="submit"
                text={t("HomePage.footer.form.buttonText")}
                alignButton="center"
            />
        </form>
    );
}
