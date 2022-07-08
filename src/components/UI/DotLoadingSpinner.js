import classes from "./DotLoadingSpinner.module.css";

const DotLoadingSpinner = (props) => {
    return (
        <div className={classes["jelly-container"]}>
            <div class={classes.jelly}></div>
            <svg width="0" height="0" class={classes["jelly-maker"]}>
                <defs>
                    <filter id="uib-jelly-ooze">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="6.25"
                            result="blur"
                        ></feGaussianBlur>
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="ooze"
                        ></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="ooze"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default DotLoadingSpinner;
