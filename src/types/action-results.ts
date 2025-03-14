// types
import { type ReservationFormError } from "./error-types";

export type ReservationActionResult = {
    isSuccess: boolean;
    errors: ReservationFormError | null;
};
