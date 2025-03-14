// types
import { type LangType } from "@/types/db-types";
// modules
import CourseSection from "@/components/main/course-section/course-section";
import { getLocale } from "next-intl/server";
import { getAllBreakfastCategories } from "@/lib/db/breakfast-categories";

export default async function BreakfastPage() {
    const locale = (await getLocale()) as LangType;
    const breakfastCategories = await getAllBreakfastCategories(locale);

    return (
        <main>
            {breakfastCategories.map((category, index) => (
                <CourseSection key={category.id} locale={locale} breakfastCategory={category} isEven={index % 2 === 0} />
            ))}
        </main>
    );
}
