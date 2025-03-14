// types
import { type LangType } from "@/types/db-types";
// modules
import CourseSection from "@/components/main/course-section/course-section";
import { getAllBarCategories } from "@/lib/db/bar-categories";
import { getLocale } from "next-intl/server";

export default async function DrinksPage() {
    const locale = (await getLocale()) as LangType;
    const barCategories = await getAllBarCategories(locale);

    return (
        <main>
            {barCategories.map((category, index) => (
                <CourseSection key={category.id} locale={locale} barCategory={category} isEven={index % 2 === 0} />
            ))}
        </main>
    );
}
