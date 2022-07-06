import classes from "./NavBar.module.css";
import Logo from "../UI/Logo";
import { useState } from "react";
import { useHistory } from "react-router";
import SearchBtn from "../UI/SearchBtn";
import BurgerBtn from "./BurgerBtn";
import BurgerMenu from "./BurgerMenu";
import NavLinks from "./NavLinks";
import ModalSearch from "../search/SearchModal";
import HorizontalLoadingSpinnerBar from "../UI/HorizontalLoadingSpinnerBar";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const history = useHistory();
    const { loginWithRedirect, logout, isAuthenticated, isLoading } =
        useAuth0();

    const onLogoClickHandler = () => {
        history.push("/");
    };

    const onBurgerBtnClick = () => {
        setShowSideBar((prev) => !prev);
    };

    const onCloseSideBar = () => {
        setShowSideBar(false);
    };

    return (
        <nav className={classes["nav-bar"]}>
            <div className={classes["nav-bar__links-container"]}>
                <Logo
                    className={classes["nav-bar__logo"]}
                    onClick={onLogoClickHandler}
                />
                <NavLinks className={classes["nav-bar__links"]} />
            </div>
            <div className={classes["nav-bar__right-side"]}>
                {isLoading && <HorizontalLoadingSpinnerBar />}
                {!isAuthenticated && !isLoading && (
                    <button
                        className={classes["login-btn"]}
                        onClick={() => {
                            loginWithRedirect();
                        }}
                    >
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        <span>Login</span>
                    </button>
                )}
                {isAuthenticated && !isLoading && (
                    <button
                        className={classes["login-btn"]}
                        onClick={() => {
                            logout({ returnTo: window.location.origin });
                        }}
                    >
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Logout</span>
                    </button>
                )}
                <SearchBtn
                    className={classes.magnifier}
                    onClick={() => setShowSearchModal(true)}
                    style={{ marginLeft: "0.5rem" }}
                />
                <BurgerBtn
                    className={classes["nav-bar__burger-btn"]}
                    onClick={onBurgerBtnClick}
                    open={showSideBar}
                />
            </div>
            {showSearchModal && (
                <ModalSearch onCancel={() => setShowSearchModal(false)} />
            )}
            <BurgerMenu open={showSideBar} onClose={onCloseSideBar} />
        </nav>
    );
};

export default NavBar;
