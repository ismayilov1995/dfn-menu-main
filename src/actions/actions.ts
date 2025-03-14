"use server";

import { WorkingHours } from "@/enums/workingHours";
import { ReservationActionResult } from "@/types/action-results";
import { ReservationFormError } from "@/types/error-types";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export async function handleReservation(
    // phoneNumber: string,
    locale: string,
    prevState: ReservationActionResult | null,
    formData: FormData
): Promise<ReservationActionResult> {
    const t = await getTranslations({ locale, namespace: "errors.form" });

    const name = formData.get("name") as string;
    const numberOfPerson = formData.get("numberOfPerson") as string;
    let reservationDay = formData.get("reservationDay") as string;
    const workingHours = formData.get("workingHours") as string;

    const minNameLength = 2;
    const maxNameLength = 100;
    const maxPersonCount = 100;

    const hourEnum: string = WorkingHours[+workingHours];

    const errors: ReservationFormError = {
        name: [],
        numberOfPerson: [],
        reservationDay: [],
        workingHours: [],
    };

    console.log(reservationDay);

    if (!checkDataExists(name)) errors.name.push(t("nameRequired"));

    if (!checkOnlyLetters(name)) errors.name.push(t("nameOnlyLetters"));

    if (!checkMinimumLength(name, minNameLength)) errors.name.push(t("nameMinLength", { minLength: minNameLength }));

    if (!checkMaximumLength(name, maxNameLength)) errors.name.push(t("nameMaxLength", { maxLength: maxNameLength }));

    if (!checkDataExists(+numberOfPerson)) errors.numberOfPerson.push(t("personRequired"));

    if (!checkNumberInteger(+numberOfPerson)) errors.numberOfPerson.push(t("personInteger"));

    if (!checkNumberPositive(+numberOfPerson)) errors.numberOfPerson.push(t("personPositive"));

    if (!checkMaxNumber(+numberOfPerson, maxPersonCount)) errors.numberOfPerson.push(t("personMaxCount", { maxPersonCount }));

    if (!checkDataExists(reservationDay)) errors.reservationDay.push(t("dayRequired"));

    if (!checkDateIsValid(reservationDay)) errors.reservationDay.push(t("dayIncorrect"));

    if (!checkFirstOptionNotSelected(workingHours)) errors.workingHours.push(t("hourRequired"));

    const actionResult: ReservationActionResult = { isSuccess: true, errors: null };

    const hasError = checkAnyError(errors);

    console.log(hasError);

    if (hasError) {
        actionResult.isSuccess = false;
        actionResult.errors = errors;

        return actionResult;
    }

    reservationDay = changeDateFormat(reservationDay);

    const messageText = `*REZERVASİYA*
*Tarix:* _${reservationDay}_
*Saat:* _${hourEnum}_
*Ad:* ${name},
*Qonaq sayı:* ${numberOfPerson}`;

    // *Əlaqə nömrəsi:* +${phoneNumber}, // for adding to the messageText

    const uri = encodeURI(messageText);
    const receiver = process.env.MESSAGE_RECEIVER_PHONE_NUMBER;

    redirect(`https://wa.me/${receiver}?text=${uri}`);
}

function checkDataExists(data: string | number) {
    if (typeof data === "string") return data || data.length > 0;

    return data || data > 0;
}

function checkMinimumLength(data: string, minLength: number) {
    return data.length >= minLength;
}

function checkMaximumLength(data: string, maxLength: number) {
    return data.length <= maxLength;
}

function checkNumberInteger(data: number) {
    return Number.isInteger(data);
}

function checkNumberPositive(data: number) {
    return data > 0;
}

function checkMaxNumber(data: number, maxNumber: number) {
    return data <= maxNumber;
}

function checkFirstOptionNotSelected(data: string) {
    return data !== "0";
}

function checkAnyError(errorsObj: ReservationFormError): boolean {
    for (const key in errorsObj) {
        const typedKey = key as keyof ReservationFormError;

        if (errorsObj[typedKey].length > 0) return true;
    }

    return false;
}

function checkOnlyLetters(data: string) {
    const onlyLettersRegex = /^[a-zA-Z ]+$/;

    return onlyLettersRegex.test(data);
}

function checkDateIsValid(dateString: string): boolean {
    const date = new Date(dateString);

    return !isNaN(date.getTime());
}

function changeDateFormat(dateString: string): string {
    const dateObj = new Date(dateString);

    const day = dateObj.getDate();
    const dayStr = day < 10 ? `0${day}` : `${day}`;

    const month = dateObj.getMonth() + 1;
    const monthStr = month < 10 ? `0${month}` : `${month}`;

    const year = dateObj.getFullYear();

    return `${dayStr}.${monthStr}.${year}`;
}
