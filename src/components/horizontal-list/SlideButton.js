import classes from "./SlideButton.module.css";

const SlideButton = (props) => {
  const { position } = props;

  const onClickHandler = (event) => {
    const scrollLimit = props.scrollLimit;
    const scroll = position === "right" || position === "down" ? 10 : -10;

    let scrollAmount = 0;

    let slideTimer = setInterval(() => {
      if (position === "right" || position === "left") {
        props.containerRef.current.scrollLeft += scroll;
      } else {
        props.containerRef.current.scrollTop += scroll;
      }
      scrollAmount += 10;
      if (scrollAmount > scrollLimit) {
        window.clearInterval(slideTimer);
      }
    }, 15);
  };

  const btnPositionStyle =
    position === "right"
      ? {
          right: "0%",
          top: "25%",
          backgroundImage: "linear-gradient(to left, black 15%, transparent)",
        }
      : position === "left"
      ? {
          left: "0%",
          top: "25%",
          backgroundImage: "linear-gradient(to right, black 15%, transparent)",
        }
      : position === "up"
      ? {
          margin: "auto",
          left: 0,
          right: 0,
          top: "0%",
          backgroundImage: "linear-gradient(to bottom, black 15%, transparent)",
        }
      : {
          margin: "auto",
          left: 0,
          right: 0,
          bottom: "0%",
          backgroundImage: "linear-gradient(to top, black 15%, transparent)",
        };

  const icon =
    position === "right" ? (
      <i class="fas fa-chevron-right"></i>
    ) : position === "left" ? (
      <i class="fas fa-chevron-left"></i>
    ) : position === "up" ? (
      <i class="fas fa-chevron-up"></i>
    ) : (
      <i class="fas fa-chevron-down"></i>
    );

  return (
    <button
      onClick={onClickHandler}
      style={btnPositionStyle}
      className={classes["slide-btn"]}
    >
      {icon}
    </button>
  );
};

export default SlideButton;
