import classes from "./HomeSearch.module.css";
import SearchBar from "./SearchBar";
import Logo from "../UI/Logo";

const HomeSearch = (props) => {
  return (
    <div
      className={`${props.className}  bor-rad-bg box-shadow-bg ${classes["home-search"]}`}
    >
      <Logo className={`${classes.logo}`} />
      <SearchBar className={`${classes["search-bar"]}`} />
    </div>
  );
};

export default HomeSearch;
