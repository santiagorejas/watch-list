import classes from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = (props) => {
  const [inptuValue, setInputValue] = useState("");

  const onInputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onInputKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      props.onSearch(inptuValue);
    }
  };

  const onSearchHandler = () => {
    props.onSearch(inptuValue);
  };

  return (
    <div
      className={`${props.className} ${classes["search-bar"]} bor-rad-md box-shadow-sm`}
    >
      <input
        className={`bor-rad-md`}
        placeholder="Search for a movie..."
        onChange={onInputChangeHandler}
        value={inptuValue}
        onKeyPress={onInputKeyPressHandler}
      />
      <button onClick={onSearchHandler}>
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
