import { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import classes from "./HorizontalList.module.css";

const VerticalList = (props) => {
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

	return (
		<div className={classes["vertical-container"]}>
			<h1>{props.title}</h1>
			<div className={classes["content-container"]}>
				{content.map((cont) => {
					return <MediaCard content={cont} />;
				})}
			</div>
		</div>
	);
};

export default VerticalList;
