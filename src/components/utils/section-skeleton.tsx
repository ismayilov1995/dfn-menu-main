// styles
import "react-loading-skeleton/dist/skeleton.css";
// modules
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SectionSkeleton() {
    const classes = {
        section: "border-b",
        container: `container mx-auto border-lr py-10 px-5 bg-[var(--course-section-bg-secondary)]`,
        h2: "text-center text-[2rem] font-medium mb-6",
        columns: `grid gap-y-5 gap-x-10`,
        p: `text-right`,
        span: `me-7`,
    };

    return (
        <SkeletonTheme highlightColor="var(--theme-color-fifth)" baseColor="var(--theme-color-sixth)">
            <section className={classes.section}>
                <div className={classes.container}>
                    <Skeleton height={48} className={classes.h2} />
                    <div className={classes.columns}>
                        <Skeleton height={28} count={4} />
                    </div>
                </div>
            </section>
        </SkeletonTheme>
    );
}
