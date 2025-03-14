"use server";
// types
import type { DrinkType, LangType, RangeType } from "@/types/db-types";
// modules
import { cacheLifeTime } from "../cache/cache";
import { getRangeString, later } from "../helpers/db-helpers";

export async function getAllDrinks(language: LangType): Promise<DrinkType[]> {
    await later(1000);

    const ranges: string[] = ["drinks!A4:F1001"];

    switch (language) {
        case "en":
            ranges.push("drinks!H4:H1001");
            break;
        case "az":
            ranges.push("drinks!I4:I1001");
            break;
        case "ru":
            ranges.push("drinks!J4:J1001");
            break;
    }

    const rangeString = getRangeString(ranges);
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?key=${apiKey}&ranges=${rangeString}`;

    const drinks: DrinkType[] = [];
    const response = await fetch(url, { next: { revalidate: cacheLifeTime } });
    const data = await response.json();

    data.valueRanges?.forEach((range: RangeType, index: number) => {
        if (index === 0)
            range.values?.forEach((value) =>
                drinks.push({
                    id: value[0],
                    barCategoryId: value[1],
                    image: value[2],
                    ingredients: value[3],
                    priceGlass: value[4],
                    priceBottle: value[5],
                    name: "",
                })
            );

        if (index === 1) range.values?.forEach((value, index) => (drinks[index].name = value[0]));
    });

    return drinks;
}

export async function getDrinkById(id: string, language: LangType): Promise<DrinkType | undefined> {
    const drinks = await getAllDrinks(language);

    return drinks.find((m) => m.id === id);
}

export async function getDrinksByCategory(categoryId: string, language: LangType): Promise<DrinkType[]> {
    const drinks = await getAllDrinks(language);

    return drinks.filter((m) => m.barCategoryId === categoryId);
}
