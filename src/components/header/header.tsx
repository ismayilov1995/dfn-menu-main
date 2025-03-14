// modules
import TopBar from "./top-bar/top-bar";
import Description from "./description/description";
import Overlay from "../utils/overlay";

const classes = {
    header: `border-b sm:border-t`,
    content: `container relative mx-auto px-5 border-lr bg-[url("../../public/images/header-bg.jpg")] bg-scroll sm:bg-fixed bg-center bg-no-repeat bg-cover`,
};

export default function Header() {
    return (
        <header id="header" className={classes.header}>
            <div className={classes.content}>
                <Overlay />
                <TopBar />
                <Description />
            </div>
        </header>
    );
}
