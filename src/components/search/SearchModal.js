import ReactDOM from "react-dom";
import classes from "./SearchModal.module.css";
import SearchBar from "./SearchBar";
import { useHistory } from "react-router";

const Backdrop = (props) => {
  return <div className={classes["backdrop"]} onClick={props.onClick} />;
};

const SearchModal = (props) => {
  const history = useHistory();

  const onSearchHandler = (inputValue) => {
    history.push({
      pathname: "search",
      search: `?name=${inputValue}`,
    });
    props.onCancel();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <div className={`${classes["search-modal"]}`}>
          <button
            className={classes["search-modal__close-btn"]}
            onClick={props.onCancel}
          >
            <i className="fas fa-times"></i>
          </button>
          <h1 className={classes["search-modal__title"]}>Search</h1>
          <SearchBar
            className={classes["search-modal__search-bar"]}
            onSearch={onSearchHandler}
          />
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default SearchModal;
