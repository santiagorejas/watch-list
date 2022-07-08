import { useEffect, useState } from "react";
import HomeSection from "../../components/home section/HomeSection";
import InfiniteList from "../../components/infinite-list/InfiniteList";
import HomeSearch from "../../components/search/HomeSearch";
import TMDB from "../../components/UI/TMDB";
import sections from "../../content/home-sections-list";

import classes from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={`${classes.homepage}`}>
            <HomeSearch className={`${classes["homepage__search"]}`} />
            <div className={`${classes["homepage__sections"]} section`}>
                {sections.map((section) => (
                    <HomeSection
                        title={section.title}
                        url={section.url}
                        infiniteScroll={section.infinite_scroll}
                    />
                ))}
            </div>
            <TMDB />
        </div>
    );
};

export default HomePage;
