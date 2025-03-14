// types
import type { MealImageProps } from "@/types/props-types";
// modules
import Image from "next/image";

export default function MealImage({ category, imageName }: MealImageProps) {
    const classes = {
        imageHolder: "relative shrink-0 me-3 rounded-[8px] overflow-hidden w-[100px] h-[100px]",
        image: "object-cover",
    };

    let imageSource = `/images/`;

    if (imageName === "meal.png" || imageName === "drink.png") {
        imageSource += `dfn_logo_dark.svg`;
        classes.image = "object-contain bg-[#E8EAE9] p-3";
    } else {
        switch (category) {
            case "meals":
                imageSource += `meals/`;
                break;
            case "drinks":
                imageSource += `drinks/`;
                break;
            case "breakfast":
                imageSource += `breakfast/`;
                break;
            default:
                imageSource += `dfn_logo_dark.svg`;
                break;
        }

        imageSource += imageName;
    }

    return (
        <div className={classes.imageHolder}>
            <Image src={imageSource} alt={imageName || ""} fill quality={10} sizes="20vw" className={classes.image} priority />
        </div>
    );
}
