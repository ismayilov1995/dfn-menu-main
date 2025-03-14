export type CategoryType = {
    id: string;
    name: string;
};

export type MealType = {
    id: string;
    categoryId: string;
    image: string;
    price: string;
    name: string;
};

export type DrinkType = {
    id: string;
    barCategoryId: string;
    image: string;
    ingredients: string;
    priceGlass: string;
    priceBottle: string;
    name: string;
};

export type CacheType<T> = {
    [key: string]: CacheEntry<T>;
};

export type CacheEntry<T> = {
    data: T;
    timestamp: number;
};

export type LangType = "en" | "az" | "ru";

export type RangeType = {
    range: string;
    majorDimension: string;
    values: string[];
};
