// modules
import BigScreen from "./big-screen";
import SmallScreen from "./small-screen";

const classes = {
    topBar: `relative py-4`,
};

export default function TopBar() {
    return (
        <section id="topBar" className={classes.topBar}>
            <BigScreen />
            <SmallScreen />
        </section>
    );
}
