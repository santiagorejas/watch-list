import classes from "./SearchBtn.module.css";

const SearchBtn = (props) => {
    return (
        <button
            className={`${classes["search-btn"]} ${props.className}`}
            onClick={props.onClick}
            style={props.style}
        >
            <i className="fas fa-search"></i>
        </button>
    );
};

export default SearchBtn;
