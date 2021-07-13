import classes from "./SlideButton.module.css";

const SlideButton = (props) => {
  const onClickHandler = (event) => {
    const scrollLimit = props.scrollLimit;
    const scroll = props.right ? 10 : -10;
    let scrollAmount = 0;
    let slideTimer = setInterval(() => {
      props.containerRef.current.scrollLeft += scroll;
      scrollAmount += 10;
      if (scrollAmount > scrollLimit) {
        window.clearInterval(slideTimer);
      }
    }, 15);
  };

  const btnPositionStyle = props.right
    ? {
        right: "0%",
        backgroundImage: "linear-gradient(to left, black 15%, transparent)",
      }
    : {
        left: "0%",
        backgroundImage: "linear-gradient(to right, black 15%, transparent)",
      };

  return (
    <button
      onClick={onClickHandler}
      style={btnPositionStyle}
      className={classes["slide-btn"]}
    >
      {props.right ? (
        <i class="fas fa-chevron-right"></i>
      ) : (
        <i class="fas fa-chevron-left"></i>
      )}
    </button>
  );
};

export default SlideButton;
