import { useEffect, useState, useRef } from "react";
import HorizontalCard from "./HorizontalCard";
import classes from "./HorizontalList.module.css";
import SlideButton from "./SlideButton";
import Spinner from "../UI/Spinner";
import { useContext } from "react";
import useHttp from "../../hooks/use-http";
import NoMovies from "../UI/NoMovies";
import UserProfile from "../../context/user-profile";

const HorizontalList = (props) => {
    const [content, setContent] = useState([]);

    const { isLoading, error, sendRequest } = useHttp();

    useEffect(() => {
        sendRequest(
            {
                url: props.url,
            },
            (data) => {
                let contentList = [];
                data.results.forEach((cont) => {
                    contentList.push(cont);
                });
                setContent(contentList);
            }
        );
    }, []);

    const cardContainerWrapperRef = useRef();
    const favWatchedCtx = useContext(UserProfile);

    if (isLoading) {
        return (
            <div className={classes["vertical-container"]}>
                <h1 className={classes.title}>{props.title}</h1>
                <Spinner />
            </div>
        );
    }

    if (error) {
        return <NoMovies message={error} />;
    }

    return (
        <div className={classes["horizontal-list"]}>
            <div
                ref={cardContainerWrapperRef}
                className={
                    classes["horizontal-list__content-container-wrapper"]
                }
            >
                <div className={classes["horizontal-list__content-container"]}>
                    {content.map((cont) => {
                        return (
                            <HorizontalCard
                                key={cont.id}
                                content={cont}
                                fav={favWatchedCtx.isFavorite(cont.id)}
                                watched={favWatchedCtx.wasWatched(cont.id)}
                                onAddFav={favWatchedCtx.addFavorite}
                                onRemoveFav={favWatchedCtx.removeFavorite}
                                onAddWatched={favWatchedCtx.addWatched}
                                onRemoveWatched={favWatchedCtx.removeWatched}
                                className={classes["horizontal-list__card"]}
                            />
                        );
                    })}
                </div>
            </div>
            <SlideButton
                containerRef={cardContainerWrapperRef}
                position={"left"}
                scrollLimit={190}
            />
            <SlideButton
                containerRef={cardContainerWrapperRef}
                position="right"
                scrollLimit={190}
            />
        </div>
    );
};

export default HorizontalList;
