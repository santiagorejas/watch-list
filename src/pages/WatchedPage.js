import { useContext } from "react";
import VerticalList from "../components/vertical-list/VerticalList";
import UserProfile from "../context/user-profile";

const FavoritesPage = () => {
    const favWatchedCtx = useContext(UserProfile);

    return (
        <>
            <VerticalList moviesId={favWatchedCtx.watched} />
        </>
    );
};

export default FavoritesPage;
