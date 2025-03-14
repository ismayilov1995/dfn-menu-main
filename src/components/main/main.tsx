// types
import { type LangType } from "@/types/db-types";
// modules
import CourseSection from "./course-section/course-section";
import { getAllCategories } from "@/lib/db/categories";
import { getLocale } from "next-intl/server";
import SectionSkeleton from "../utils/section-skeleton";
import { Suspense } from "react";

export default async function Main() {
    const locale = (await getLocale()) as LangType;
    const categories = await getAllCategories(locale);

    return (
        <main>
            <Suspense fallback={<SectionSkeleton />}>
                {categories.map((category, index) => (
                    <CourseSection key={category.id} locale={locale} category={category} isEven={index % 2 === 0} />
                ))}
            </Suspense>
        </main>
    );
}
