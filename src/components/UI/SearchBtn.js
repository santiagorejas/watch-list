import classes from "./SearchBtn.module.css";

const SearchBtn = (props) => {
  return (
    <button
      className={`${classes["search-btn"]} ${props.className}`}
      onClick={props.onClick}
    >
      <i className="fas fa-search"></i>
    </button>
  );
};

export default SearchBtn;
