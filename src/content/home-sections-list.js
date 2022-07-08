const sections = [
    {
        title: "Popular",
        url: "https://api.themoviedb.org/3/movie/popular?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=2",
        infinite_scroll: false,
    },
    {
        title: "Trending",
        url: "https://api.themoviedb.org/3/trending/all/day?api_key=b61e1b3719a9ee56423ad6e473cbf2ab",
        infinite_scroll: false,
    },
    {
        title: "Top Rated",
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=1",
        infinite_scroll: false,
    },
    {
        title: "Now Playing",
        url: "https://api.themoviedb.org/3/movie/now_playing?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US",
        infinite_scroll: true,
    },
];

export default sections;
