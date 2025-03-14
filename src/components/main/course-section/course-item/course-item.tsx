// styles
import styles from "./course-item.module.css";
// types
import { type CourseItemPropsType } from "@/types/props-types";
// modules
import MealImage from "@/components/utils/meal-image";

export default function CourseItem({ inEvenSection, meal, drink, isBreakfast = false }: CourseItemPropsType) {
    const bgColor = inEvenSection ? "bg-[var(--course-item-bg-secondary)]" : "bg-[var(--course-item-bg-primary)]";

    const classes = {
        courseItem: "flex items-center",
        nameAndPrice: "flex items-center justify-between relative text-xl w-full",
        name: `${bgColor} z-10 pe-1 text-base sm:text-lg`,
        price: `${bgColor} z-10 text-right ps-1 ms-16`,
        span: `me-12`,
        ingredients: `${bgColor} z-10 px-1 text-xs text-[var(--theme-color-second)]`,
    };

    if (meal) {
        return (
            <div className={classes.courseItem}>
                {isBreakfast ? <MealImage category="breakfast" imageName={meal.image} /> : <MealImage category="meals" imageName={meal.image} />}
                <div className={`${classes.nameAndPrice} ${styles.nameAndPrice}`}>
                    <p className={classes.name}>{meal.name}</p>
                    <p className={classes.price}>{meal.price}</p>
                </div>
            </div>
        );
    }

    if (drink) {
        return (
            <div className={classes.courseItem}>
                <MealImage category="drinks" imageName={drink.image} />
                <div className={`${classes.nameAndPrice} ${styles.nameAndPrice}`}>
                    <p className={classes.name}>
                        <span>{drink.name}</span>
                        {(drink.ingredients || drink.ingredients !== "") && <span className={classes.ingredients}>({drink.ingredients})</span>}
                    </p>
                    <p className={classes.price}>
                        {drink.priceBottle && drink.priceGlass && (
                            <>
                                <span className={classes.span}>{drink.priceGlass}</span>
                                <span>{drink.priceBottle}</span>
                            </>
                        )}
                        {drink.priceBottle && !drink.priceGlass && <span>{drink.priceBottle}</span>}
                        {!drink.priceBottle && drink.priceGlass && <span>{drink.priceGlass}</span>}
                    </p>
                </div>
            </div>
        );
    }

    return <div>No Item</div>;
}
