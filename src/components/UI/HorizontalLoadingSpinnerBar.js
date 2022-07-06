import classes from "./HorizontalLoadingSpinnerBar.module.css";

const HorizontalLoadingSpinnerBar = (props) => {
    return (
        <div class={classes["progress-loader"]}>
            <div class={classes["progress"]}></div>
        </div>
    );
};

export default HorizontalLoadingSpinnerBar;
