import classes from "./HomeSearch.module.css";
import SearchBar from "./SearchBar";
import Logo from "../UI/Logo";
import { useHistory } from "react-router-dom";

const HomeSearch = (props) => {
    const history = useHistory();

    const onSearchHandler = (inputValue) => {
        history.push({
            pathname: "search",
            search: `?name=${inputValue}`,
        });
    };

    return (
        <div className={`bor-rad-bg box-shadow-bg ${classes["home-search"]}`}>
            <Logo className={`${classes["home-search__logo"]}`} />
            <SearchBar
                className={`${classes["home-search__search-bar"]}`}
                onSearch={onSearchHandler}
            />
        </div>
    );
};

export default HomeSearch;
