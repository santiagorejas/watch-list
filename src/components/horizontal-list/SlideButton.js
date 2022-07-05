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
          top: "0%",
          height: "100%",
          background: "linear-gradient(270deg, rgba(0,0,0,1) 20%, transparent)",
        }
      : position === "left"
      ? {
          left: "0%",
          top: "0%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(0,0,0,1) 20%, transparent)",
        }
      : position === "up"
      ? {
          margin: "auto",
          left: 0,
          right: 0,
          top: "0%",
          background: "linear-gradient(180deg, rgba(0,0,0,1) 35%, transparent)",
          width: "100%",
        }
      : {
          margin: "auto",
          left: 0,
          right: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, transparent)",
          bottom: "0%",
          width: "100%",
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
