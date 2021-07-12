const WatchedIcon = (props) => {
  return (
    <i
      className={`${props.className} far fa-eye${
        props.watched ? "-slash" : ""
      }`}
      onClick={props.onClick}
    ></i>
  );
};

export default WatchedIcon;
