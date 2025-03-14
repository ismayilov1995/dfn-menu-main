"use server";
// types
import type { LangType, MealType, RangeType } from "@/types/db-types";
// modules
import { cacheLifeTime } from "../cache/cache";
import { getRangeString, later } from "../helpers/db-helpers";

export async function getAllMeals(language: LangType): Promise<MealType[]> {
    await later(1000);

    const ranges: string[] = ["meals!A4:D1001"];

    switch (language) {
        case "en":
            ranges.push("meals!F4:F1001");
            break;
        case "az":
            ranges.push("meals!G4:G1001");
            break;
        case "ru":
            ranges.push("meals!H4:H1001");
            break;
    }

    const rangeString = getRangeString(ranges);
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?key=${apiKey}&ranges=${rangeString}`;

    const meals: MealType[] = [];
    const response = await fetch(url, { next: { revalidate: cacheLifeTime } });
    const data = await response.json();

    data.valueRanges?.forEach((range: RangeType, index: number) => {
        if (index === 0)
            range.values?.forEach((value) =>
                meals.push({
                    id: value[0],
                    categoryId: value[1],
                    image: value[2],
                    price: value[3],
                    name: "",
                })
            );

        if (index === 1) range.values?.forEach((value, index) => (meals[index].name = value[0]));
    });

    return meals;
}

export async function getMealById(id: string, language: LangType): Promise<MealType | undefined> {
    const meals = await getAllMeals(language);

    return meals.find((m) => m.id === id);
}

export async function getMealsByCategory(categoryId: string, language: LangType): Promise<MealType[]> {
    const meals = await getAllMeals(language);

    return meals.filter((m) => m.categoryId === categoryId);
}
