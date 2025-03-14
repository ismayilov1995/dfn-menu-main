"use client";
// types
import { type CourseSectionClientPropsType } from "@/types/props-types";
// hooks
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
// modules
import CourseItem from "./course-item/course-item";

export default function CourseSectionClient({ isEven = false, category, barCategory, meals, drinks, isBreakfast = false }: CourseSectionClientPropsType) {
    const [columnCount, setColumnCount] = useState(2);
    const t = useTranslations("drinkType");

    useEffect(() => {
        function updateColumnCount() {
            if (window.innerWidth < 1024) setColumnCount(1); // lg
        }

        updateColumnCount();

        window.addEventListener("resize", updateColumnCount);

        return () => window.removeEventListener("resize", updateColumnCount);
    }, []);

    useEffect(() => {
        if (meals?.length === 1) setColumnCount(1);
        else if (drinks?.length === 1) setColumnCount(1);
    }, [meals, drinks]);

    const classes = {
        dish: "border-b",
        container: `container mx-auto border-lr py-10 px-5 ${isEven ? "bg-[var(--course-section-bg-secondary)]" : "bg-[var(--course-section-bg-primary)]"}`,
        h2: "text-center text-[2rem] font-medium mb-6",
        columns: `grid gap-y-5 gap-x-10`,
        p: `text-right`,
        span: `me-7 text-[var(--theme-color-second)]`,
        secondSpan: `text-[var(--theme-color-second)]`,
    };

    let sectionContent = (
        <section id="dish" className={classes.dish}>
            <div className={classes.container}>No Item</div>
        </section>
    );

    if (meals && !drinks) {
        if (meals.length === 1) {
            classes.columns += ` grid-cols-1`;
        } else classes.columns += ` grid-cols-1 lg:grid-cols-2`;

        sectionContent = (
            <section id="dish" className={classes.dish}>
                <div className={classes.container}>
                    <h2 className={classes.h2}>{category?.name}</h2>
                    <div className={classes.columns}>
                        {meals.map((meal) => (
                            <CourseItem key={meal.id} meal={meal} inEvenSection={isEven} isBreakfast={isBreakfast}/>
                        ))}
                    </div>
                </div>
            </section>
        );
    } else if (drinks && !meals) {
        if (drinks.length === 1) {
            classes.columns += ` grid-cols-1`;
        } else classes.columns += ` lg:grid-cols-2 grid-cols-1 `;

        let hasBottle: boolean = false;

        drinks.forEach((drink) => {
            if (drink.priceBottle) {
                hasBottle = true;
                return;
            }
        });

        sectionContent = (
            <section id="dish" className={classes.dish}>
                <div className={classes.container}>
                    <h2 className={classes.h2}>{barCategory?.name}</h2>
                    <div className={classes.columns}>
                        {hasBottle &&
                            Array.from({ length: columnCount }).map((el, index) => (
                                <p key={index} className={classes.p}>
                                    <span className={classes.span}>{t("glass")}</span>
                                    <span className={classes.secondSpan}>{t("bottle")}</span>
                                </p>
                            ))}
                        {drinks.map((drink) => (
                            <CourseItem key={drink.id} drink={drink} inEvenSection={isEven}/>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return <>{sectionContent}</>;
}
