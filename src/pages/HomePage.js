import { useEffect } from "react";
import HorizontalList from "../components/vertical-list/HorizontalList";

const HomePage = () => {
	const url =
		"https://api.themoviedb.org/3/trending/all/day?api_key=b61e1b3719a9ee56423ad6e473cbf2ab";

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, [url]);

	return (
		<>
			<HorizontalList
				url={
					"https://api.themoviedb.org/3/trending/all/day?api_key=b61e1b3719a9ee56423ad6e473cbf2ab"
				}
				title={"Trending movies"}
			/>
		</>
	);
};

export default HomePage;
