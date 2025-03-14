// types
import { type SelectTagType } from "./tag-types";
import { type CategoryType, type DrinkType, type LangType, type MealType } from "./db-types";

export type RootLayoutPropsType = Readonly<{
    children: React.ReactNode;
    params: {
        locale: string;
    };
}>;

export type NavItemPropsType = {
    text: string;
    href: string;
};

export type CourseSwitchPropsType = {
    leftValue: string;
    rightValue: string;
    leftBgHex: string;
    rightBgHex: string;
};

export type CourseSectionPropsType = {
    isEven?: boolean;
    category?: CategoryType;
    barCategory?: CategoryType;
    breakfastCategory?: CategoryType;
    locale: LangType;
};

export type CourseItemPropsType = {
    inEvenSection?: boolean;
    meal?: MealType;
    drink?: DrinkType;
    isBreakfast?: boolean;
};

export type InputPropsType = {
    type?: string;
    id?: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    min?: number;
    max?: number;
    selectBox?: SelectTagType;
    onPhoneChange?: (phone: string) => void;
    phoneValue?: string;
    isValid?: boolean;
    errors?: string[];
};

export type ReservationButtonPropsType = {
    text: string;
    href?: string;
    alignButton?: "left" | "center" | "right";
    type?: "submit" | "link";
    disabled?: boolean;
};

export type BrandPropsType = {
    className?: string;
    imgWidth?: number;
    imgHeight?: number;
};

export type LanguageSwitchPropsType = {
    listIsVisibile?: boolean;
};

export type BurgerButtonPropsType = {
    onButtonClick: () => void;
    menuOpen: boolean;
};

export type BurgerMenuPropsType = {
    onClickOutside: () => void;
};

export type CourseSectionClientPropsType = {
    isEven?: boolean;
    category?: CategoryType;
    barCategory?: CategoryType;
    meals?: MealType[];
    drinks?: DrinkType[];
    isBreakfast?: boolean;
};

export type DateInputPropsType = {
    placeholder?: string;
    startDate: Date | null;
    name: string;
    required?: boolean;
    onChangeHandler: (date: Date | null) => void;
};

export interface MealImageProps {
    category: "meals" | "drinks" | "breakfast";
    imageName?: string | "meal.png" | "drink.png";
}
