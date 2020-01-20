import { movieConstants } from "../actions/movie";

const getInitialState = (): any => {
    const movies: MovieState = {
        popularity: 743.027,
        vote_count: 1927,
        video: false,
        poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
        id: 419704,
        adult: false,
        backdrop_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
        original_language: "en",
        original_title: "Ad Astra",
        genre_ids: [12, 18, 9648, 878, 53],
        title: "Ad Astra",
        vote_average: 6,
        overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        release_date: "2019-09-17"
    };

    return {
        loading: false,
        movies,
        error: null
    };
};

const movies = (state = getInitialState(), action: any): MovieState => {
    switch (action.type) {
        case movieConstants.GET_POPULAR_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case movieConstants.GET_POPULAR_MOVIE_SUCCESS:
            const movies: MovieState = action.data;
            return {
                ...state,
                loading: false,
                movies,
                totalPages: action.totalPages
            };
        case movieConstants.GET_POPULAR_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.data
            };
    }
    return state;
};

export default movies;
