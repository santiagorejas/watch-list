import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import FavIcon from "../components/UI/FavIcon";
import WatchedIcon from "../components/UI/WatchedIcon";
import classes from "./MovieDetailsPage.module.css";
import CastList from "../components/cast/CastList";
import useHttp from "../hooks/use-http";
import Spinner from "../components/UI/Spinner";
import NoMovies from "../components/UI/NoMovies";
import UserProfile from "../context/user-profile";

const MovieDetailPage = () => {
    const movieId = +useParams().movieId;
    const { isLoading, error, sendRequest } = useHttp();
    const [content, setContent] = useState(null);
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        sendRequest(
            {
                url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US`,
            },
            (data) => {
                setContent(data);
            }
        );
        sendRequest(
            {
                url: `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US`,
            },
            (data) => {
                setCast(data.cast);
                setCrew(data.crew);
            }
        );
    }, [movieId, sendRequest]);

    const {
        isFavorite,
        wasWatched,
        addFavorite,
        removeFavorite,
        addWatched,
        removeWatched,
    } = useContext(UserProfile);

    const fav = isFavorite(movieId);
    const watched = wasWatched(movieId);

    if (isLoading) {
        return <Spinner className="spinner" />;
    } else if (!error && content && cast) {
        const backgroundStyle = {
            backgroundImage: `linear-gradient(to bottom, rgba(2, 23, 42, 0.6), rgba(2, 23, 42, 1)), url(https://image.tmdb.org/t/p/original${content.backdrop_path})`,
        };
        const img = `https://image.tmdb.org/t/p/w500${content.poster_path}`;

        const onFavHandler = () => {
            !fav ? addFavorite(movieId) : removeFavorite(movieId);
        };

        const onWatchedHandler = () => {
            !watched ? addWatched(movieId) : removeWatched(movieId);
        };

        const title = content.title ? content.title : content.name;
        const releaseDate = content.release_date;
        const genres = content.genres.map((genre) => genre.name).join(", ");
        const duration = `${content.runtime} mins`;
        const originalLanguage = content.original_language.toUpperCase();
        const directors = crew
            .filter((cast) => cast.job === "Director")
            .map((director) => director.name)
            .join(", ");

        return (
            <div className={classes["movie-detail"]}>
                <div
                    className={classes["movie-detail__header"]}
                    style={backgroundStyle}
                >
                    <div className={classes["movie-detail__poster-container"]}>
                        <img
                            className={classes["movie-detail__poster"]}
                            src={img}
                            alt={title}
                        />
                        <div className={classes["movie-detail__btns"]}>
                            <FavIcon
                                onClick={onFavHandler}
                                fav={fav}
                                className={`${classes["movie-detail__btn"]}`}
                            />
                            <WatchedIcon
                                onClick={onWatchedHandler}
                                watched={watched}
                                className={`${classes["movie-detail__btn"]}`}
                            />
                        </div>
                    </div>
                    <div className={classes["movie-detail__content"]}>
                        <h1 className={classes["movie-detail__title"]}>
                            {title}
                        </h1>
                        <ul className={classes["movie-detail__main-info"]}>
                            <li>
                                <h3>Release Date</h3>
                                <p>{releaseDate}</p>
                            </li>
                            <li>
                                <h3>Genres</h3>
                                <p>{genres}</p>
                            </li>
                            <li>
                                <h3>Duration</h3>
                                <p>{duration}</p>
                            </li>
                            <li>
                                <h3>Original Language</h3>
                                <p>{originalLanguage}</p>
                            </li>
                            <li>
                                <h3>Director</h3>
                                <p>{directors}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={classes["movie-detail__overview"]}>
                    <h2 className="section-title">Overview</h2>
                    <p>{content.overview}</p>
                </div>
                <CastList
                    credits={cast}
                    className={classes["movie-detail__cast"]}
                />
            </div>
        );
    }

    return <NoMovies message={error} />;
};

export default MovieDetailPage;
