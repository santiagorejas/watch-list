import HorizontalList from "../horizontal-list/HorizontalList";
import InfiniteList from "../infinite-list/InfiniteList";
import classes from "./HomeSection.module.css";

const HomeSection = (props) => {
    return (
        <div className={`${classes["homepage-section"]}`}>
            <h1 className={classes["homepage-section__title"]}>
                {props.title}
            </h1>
            {props.infiniteScroll ? (
                <InfiniteList url={props.url} />
            ) : (
                <HorizontalList url={props.url} />
            )}
        </div>
    );
};

export default HomeSection;
