import { createContext } from "react";

const UserProfile = createContext({
    favorites: [],
    watched: [],
    addFavorite: (mid) => {},
    removeFavorite: (mid) => {},
    isFavorite: (mid) => {},
    addWatched: (mid) => {},
    removeWatched: (mid) => {},
    wasWatched: (mid) => {},
});

export default UserProfile;
