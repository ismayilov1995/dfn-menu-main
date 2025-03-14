// types
import { type BrandPropsType } from "@/types/props-types";
// images
import logoLightHorizontal from "@/../public/images/dfn_logo_light_horizontal.svg";
// modules
import Image from "next/image";

export default function Brand({ className, imgWidth = 300, imgHeight = 150 }: BrandPropsType) {
    const classes = {
        img: `mx-auto`,
    };

    return (
        <div className={`${className ? className : ""}`}>
            <Image className={classes.img} src={logoLightHorizontal} alt="Dolce Far Niente Logo" width={imgWidth} height={imgHeight} />
        </div>
    );
}
