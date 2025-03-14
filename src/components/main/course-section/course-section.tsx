// types
import { type CourseSectionPropsType } from "@/types/props-types";
// modules
import { Suspense } from "react";
import SectionSkeleton from "@/components/utils/section-skeleton";
import { getMealsByCategory } from "@/lib/db/meals";
import CourseSectionClient from "./course-section-client";
import { getDrinksByCategory } from "@/lib/db/drinks";
import { getBreakfastByCategory } from "@/lib/db/breakfast";

export default async function CourseSection({ locale, isEven = false, category, barCategory, breakfastCategory }: CourseSectionPropsType) {
    if (category && !barCategory && !breakfastCategory) {
        const meals = await getMealsByCategory(category.id, locale);

        return (
            <Suspense fallback={<SectionSkeleton />}>
                <CourseSectionClient meals={meals} category={category} isEven={isEven} />
            </Suspense>
        );
    } else if (barCategory && !category && !breakfastCategory) {
        const drinks = await getDrinksByCategory(barCategory.id, locale);

        return (
            <Suspense fallback={<SectionSkeleton />}>
                <CourseSectionClient drinks={drinks} barCategory={barCategory} isEven={isEven} />
            </Suspense>
        );
    } else if (breakfastCategory && !category && !barCategory) {
        const breakfast = await getBreakfastByCategory(breakfastCategory.id, locale);

        return (
            <Suspense fallback={<SectionSkeleton />}>
                <CourseSectionClient meals={breakfast} category={breakfastCategory} isEven={isEven} isBreakfast />
            </Suspense>
        );
    }

    return (
        <Suspense fallback={<SectionSkeleton />}>
            <p>No Item</p>
        </Suspense>
    );
}
