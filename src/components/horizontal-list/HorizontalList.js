import { useEffect, useState, useRef } from "react";
import MediaCard from "./MediaCard";
import classes from "./HorizontalList.module.css";
import SlideButton from "./SlideButton";
import Spinner from "../UI/Spinner";

const HorizontalList = (props) => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { url } = props;

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      let contentList = [];
      data.results.forEach((cont) => {
        contentList.push(cont);
      });
      setContent(contentList);
      setIsLoading(false);
    };

    fetchData(url);
  }, [url]);

  const cardContainerWrapperRef = useRef();

  if (isLoading) {
    return (
      <div className={classes["vertical-container"]}>
        <h1 className={classes.title}>{props.title}</h1>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classes["vertical-container"]}>
      <h1 className={classes.title}>{props.title}</h1>
      <div
        ref={cardContainerWrapperRef}
        className={classes["content-container-wrapper"]}
      >
        <div className={classes["content-container"]}>
          {content.map((cont) => {
            return <MediaCard content={cont} />;
          })}
        </div>
      </div>
      <SlideButton
        containerRef={cardContainerWrapperRef}
        right={false}
        scrollLimit={190}
      />
      <SlideButton
        containerRef={cardContainerWrapperRef}
        right={true}
        scrollLimit={190}
      />
    </div>
  );
};

export default HorizontalList;
