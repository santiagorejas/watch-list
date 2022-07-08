import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import UserProfile from "./user-profile";

const UserProfileProvider = (props) => {
    const { sendRequest, error, clearError } = useHttp();
    const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();

    const [watched, setWatched] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchList = async (relationType, setList) => {
            try {
                const token = await getAccessTokenSilently();

                sendRequest(
                    {
                        url: `${process.env.REACT_APP_API}/api/user-movie?relation_type=${relationType}`,
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                    (data) => {
                        console.log(data.relations.map((rel) => rel.movie));
                        setList(data.relations.map((rel) => rel.movie));
                    }
                );
            } catch (err) {
                console.log(err);
            }
        };

        const setListsState = async () => {
            if (isAuthenticated) {
                await fetchList("FAVORITE", setFavorites);
                await fetchList("WATCHED", setWatched);
            } else {
                setWatched([]);
                setFavorites([]);
            }
        };

        setListsState();
    }, [sendRequest, isAuthenticated, getAccessTokenSilently, isLoading]);

    const addMovieToList = useCallback(
        async (mid, relationType) => {
            try {
                const token = await getAccessTokenSilently();

                sendRequest(
                    {
                        url: `${process.env.REACT_APP_API}/api/user-movie`,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify({
                            movie: mid,
                            relation_type: relationType,
                        }),
                    },
                    (data) => {
                        console.log(data);
                    }
                );
            } catch (err) {
                console.log(err);
            }
        },
        [getAccessTokenSilently, sendRequest]
    );

    const addFavorite = (mid) => {
        setFavorites((pre) => [...pre, mid]);
        addMovieToList(mid, "FAVORITE");
    };

    const isFavorite = (mid) => {
        // console.log("Checkeando: ", mid, ", ", favorites.includes(mid));
        return favorites.includes(mid);
    };

    const addWatched = (mid) => {
        setWatched((pre) => [...pre, mid]);
        addMovieToList(mid, "WATCHED");
    };

    const wasWatched = (mid) => {
        return watched.includes(mid);
    };

    const removeMovieFromList = useCallback(
        async (mid, relationType) => {
            try {
                const token = await getAccessTokenSilently();

                sendRequest(
                    {
                        url: `${process.env.REACT_APP_API}/api/user-movie`,
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        method: "DELETE",
                        body: JSON.stringify({
                            movie: mid,
                            relation_type: relationType,
                        }),
                    },
                    (data) => {
                        console.log(data);
                    }
                );
            } catch (err) {
                console.log(err);
            }
        },
        [getAccessTokenSilently, sendRequest]
    );

    const removeFavorite = (mid) => {
        setFavorites((pre) => pre.filter((movie) => movie !== mid));
        removeMovieFromList(mid, "FAVORITE");
    };

    const removeWatched = (mid) => {
        setWatched((pre) => pre.filter((movie) => movie !== mid));
        removeMovieFromList(mid, "WATCHED");
    };

    return (
        <UserProfile.Provider
            value={{
                favorites,
                watched,
                addFavorite,
                isFavorite,
                removeFavorite,
                addWatched,
                wasWatched,
                removeWatched,
            }}
        >
            {props.children}
        </UserProfile.Provider>
    );
};

export default UserProfileProvider;
