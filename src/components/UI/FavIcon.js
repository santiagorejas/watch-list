const FavIcon = (props) => {
  const favColor = {
    color: props.fav ? "red" : "#ccc",
  };

  return (
    <i
      className={`fas fa-heart ${props.className}`}
      onClick={props.onClick}
      style={favColor}
    ></i>
  );
};

export default FavIcon;
