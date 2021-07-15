import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div
      className={`${props.className} ${classes["search-bar"]} bor-rad-md box-shadow-sm`}
      onClick={props.onClick}
    >
      <input className={`bor-rad-md`} placeholder="Movie title..." />
      <button>
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
