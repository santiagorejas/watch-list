import classes from "./HomeSearch.module.css";
import SearchBar from "./SearchBar";
import Logo from "../UI/Logo";
import { useLocation, useHistory } from "react-router-dom";

const HomeSearch = (props) => {
  const history = useHistory();
  const location = useLocation();

  const onSearchHandler = (inputValue) => {
    history.push({
      pathname: "search",
      search: `?name=${inputValue}`,
    });
  };

  return (
    <div
      className={`${props.className}  bor-rad-bg box-shadow-bg ${classes["home-search"]}`}
    >
      <Logo className={`${classes.logo}`} />
      <SearchBar
        className={`${classes["search-bar"]}`}
        onSearch={onSearchHandler}
      />
    </div>
  );
};

export default HomeSearch;
