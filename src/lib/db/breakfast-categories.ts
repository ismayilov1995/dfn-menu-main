"use server";
// types
import type { CategoryType, LangType, RangeType } from "@/types/db-types";
// modules
import { getRangeString, later } from "../helpers/db-helpers";
import { cacheLifeTime } from "../cache/cache";

export async function getAllBreakfastCategories(language: LangType): Promise<CategoryType[]> {
    await later(1000);

    const ranges: string[] = ["breakfast_categories!B4:B1001"];

    switch (language) {
        case "en":
            ranges.push("breakfast_categories!C4:C1001");
            break;
        case "az":
            ranges.push("breakfast_categories!D4:D1001");
            break;
        case "ru":
            ranges.push("breakfast_categories!E4:E1001");
            break;
    }

    const rangeString = getRangeString(ranges);
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?key=${apiKey}&ranges=${rangeString}`;

    const categories: CategoryType[] = [];
    const response = await fetch(url, { next: { revalidate: cacheLifeTime } });
    const data = await response.json();

    data.valueRanges?.forEach((range: RangeType, index: number) => {
        if (index === 0) range.values?.forEach((value) => categories.push({ id: value[0], name: "" }));

        if (index === 1) range.values?.forEach((value, index) => (categories[index].name = value[0]));
    });

    return categories;
}

export async function getCategoryById(id: string, language: LangType): Promise<CategoryType | undefined> {
    const categories = await getAllBreakfastCategories(language);

    return categories.find((c) => c.id === id);
}
