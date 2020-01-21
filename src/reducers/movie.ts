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

    const movie: MovieDetailsState = {
        adult: false,
        backdrop_path: "/riTANvQ8GKmQbgtC1ps3OfkU43A.jpg",
        belongs_to_collection: {
            id: 528,
            name: "The Terminator Collection",
            poster_path: "/vxiKtcxAJxHhlg2H1X8y7zcM3k6.jpg",
            backdrop_path: "/cpmbkwSxZnKO69V82A9a34tvk2E.jpg"
        },
        budget: 185000000,
        genres: [
            {
                id: 28,
                name: "Action"
            },
            {
                id: 878,
                name: "Science Fiction"
            }
        ],
        homepage: "https://www.paramountmovies.com/movies/terminator-dark-fate",
        id: 290859,
        imdb_id: "tt6450804",
        original_language: "en",
        original_title: "Terminator: Dark Fate",
        overview:
            "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
        popularity: 251.454,
        poster_path: "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
        production_companies: [
            {
                id: 574,
                logo_path: "/iB6GjNVHs5hOqcEYt2rcjBqIjki.png",
                name: "Lightstorm Entertainment",
                origin_country: "US"
            },
            {
                id: 82819,
                logo_path: "/5Z8WWr0Lf1tInVWwJsxPP0uMz9a.png",
                name: "Skydance Media",
                origin_country: "US"
            },
            {
                id: 25,
                logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
                name: "20th Century Fox",
                origin_country: "US"
            },
            {
                id: 4,
                logo_path: "/fycMZt242LVjagMByZOLUGbCvv3.png",
                name: "Paramount",
                origin_country: "US"
            },
            {
                id: 81620,
                logo_path: "/gNp4dfuBOXmVWdGKb63NfbFNbFi.png",
                name: "Tencent Pictures",
                origin_country: "CN"
            },
            {
                id: 22213,
                logo_path: "/qx9K6bFWJupwde0xQDwOvXkOaL8.png",
                name: "TSG Entertainment",
                origin_country: "US"
            }
        ],
        production_countries: [
            {
                iso_3166_1: "CN",
                name: "China"
            },
            {
                iso_3166_1: "US",
                name: "United States of America"
            }
        ],
        release_date: "2019-10-23",
        revenue: 233685077,
        runtime: 128,
        spoken_languages: [
            {
                iso_639_1: "en",
                name: "English"
            },
            {
                iso_639_1: "es",
                name: "Español"
            }
        ],
        status: "Released",
        tagline: "Welcome to the day after judgement day",
        title: "Terminator: Dark Fate",
        video: false,
        vote_average: 6.2,
        vote_count: 1046
    };

    return {
        loading: false,
        movies,
        error: null,
        movieLoading: false,
        movieError: null,
        movie
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
        case movieConstants.GET_MOVIE_REQUEST:
            return {
                ...state,
                movieLoading: true
            };
        case movieConstants.GET_MOVIE_SUCCESS:
            const movie: MovieDetailsState = action.data;
            return {
                ...state,
                movieLoading: false,
                movie
            };
        case movieConstants.GET_MOVIE_FAILURE:
            return {
                ...state,
                movieLoading: false,
                movieError: action.data
            };
    }
    return state;
};

export default movies;
