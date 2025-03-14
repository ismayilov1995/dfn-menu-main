// modules
import * as yup from "yup";

export const reservationSchema = yup.object().shape({
    name: yup.string().min(2, "Field value length must be minimum 2").max(100, "Field value length must be maximum 100").required("Field is required"),
    numberOfPerson: yup
        .number()
        .integer("Field value must be an integer")
        .positive("Field value must be positive number")
        .max(100, "Field value must be maximum 100")
        .required("Field is required"),
    reservationDay: yup.string().test("not-first-one", "Reservation day must be selected", (value) => value !== "0"),
    workingHours: yup.string().test("not-first-one", "Reservation hour must be selected", (value) => value !== "0"),
});
