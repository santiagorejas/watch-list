import classes from "./SlideButton.module.css";

const SlideButton = (props) => {
  const { position } = props;

  const onClickHandler = (event) => {
    const { scrollLimit } = props;
    const scroll =
      position === "right" || position === "down" ? scrollLimit : -scrollLimit;

    if (position === "right" || position === "left") {
      props.containerRef.current.scrollLeft += scroll;
    } else {
      props.containerRef.current.scrollTop += scroll;
    }
  };

  const btnPositionStyle =
    position === "right"
      ? {
          right: "0%",
          top: "15%",
        }
      : position === "left"
      ? {
          left: "0%",
          top: "15%",
        }
      : position === "up"
      ? {
          margin: "auto",
          left: 0,
          right: 0,
          top: "0%",
        }
      : {
          margin: "auto",
          left: 0,
          right: 0,
          bottom: "0%",
        };

  const icon =
    position === "right" ? (
      <i className="fas fa-chevron-right"></i>
    ) : position === "left" ? (
      <i className="fas fa-chevron-left"></i>
    ) : position === "up" ? (
      <i className="fas fa-chevron-up"></i>
    ) : (
      <i className="fas fa-chevron-down"></i>
    );

  return (
    <button
      onClick={onClickHandler}
      style={btnPositionStyle}
      className={`${classes["slide-btn"]} ${props.className}`}
    >
      {icon}
    </button>
  );
};

export default SlideButton;
