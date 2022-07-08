import { useState, useContext, useEffect, useRef } from "react";
import classes from "./InfiniteList.module.css";
import HorizontalCard from "../horizontal-list/HorizontalCard";
import SlideButton from "../horizontal-list/SlideButton";
import useHttp from "../../hooks/use-http";
import UserProfile from "../../context/user-profile";
import Spinner from "../UI/Spinner";

const InfiniteList = (props) => {
    const [content, setContent] = useState([]);
    const [nowPlayingPage, setNowPlayingPage] = useState(1);
    const cardContainerWrapperRef = useRef();

    const favWatchedCtx = useContext(UserProfile);

    const { isLoading, error, sendRequest } = useHttp();

    const { url } = props;

    useEffect(() => {
        sendRequest(
            {
                url: `${url}&page=${nowPlayingPage}`,
            },
            (data) => {
                let contentList = [];
                data.results.forEach((cont) => {
                    contentList.push(cont);
                });
                setContent((prev) => [...prev, ...contentList]);
            }
        );
    }, [nowPlayingPage, url, sendRequest]);

    const onScrollHandler = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        if (scrollHeight - scrollTop <= clientHeight + 200) {
            console.log("FETCHING NEW MOVIES");
            setNowPlayingPage((prev) => prev + 1);
        }
    };

    return (
        <div className={`${classes["infinite-list"]} `}>
            <div
                className={classes["infinite-list__card-container"]}
                ref={cardContainerWrapperRef}
                onScroll={onScrollHandler}
            >
                {isLoading && <Spinner />}
                {!isLoading &&
                    content.map((cont) => {
                        return (
                            <HorizontalCard
                                key={cont.id}
                                content={cont}
                                watched={favWatchedCtx.watched.includes(
                                    cont.id
                                )}
                                onAddFav={favWatchedCtx.addFavorite}
                                onRemoveFav={favWatchedCtx.removeFavorite}
                                onAddWatched={favWatchedCtx.addWatched}
                                onRemoveWatched={favWatchedCtx.removeWatched}
                                fav={favWatchedCtx.favorites.includes(cont.id)}
                                className={classes["infinite-list__card"]}
                            />
                        );
                    })}
            </div>
            <SlideButton
                containerRef={cardContainerWrapperRef}
                position="up"
                scrollLimit={350}
            />
            <SlideButton
                containerRef={cardContainerWrapperRef}
                position="down"
                scrollLimit={350}
            />
        </div>
    );
};

export default InfiniteList;
