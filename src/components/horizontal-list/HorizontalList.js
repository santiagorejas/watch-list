import { useEffect, useState, useRef } from "react";
import MediaCard from "./MediaCard";
import classes from "./HorizontalList.module.css";
import SlideButton from "./SlideButton";

const HorizontalList = (props) => {
  const [content, setContent] = useState([]);

  const { url } = props;

  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      let contentList = [];
      data.results.forEach((cont) => {
        contentList.push(cont);
      });
      setContent(contentList);
    };

    fetchData(url);
  }, [url]);

  const cardContainerWrapperRef = useRef();

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
