interface MovieState {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: Array<number>;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

interface MovieDetailsState {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: Array<{
        id: number;
        name: string;
    }>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<{
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }>;
    production_countries: Array<Object>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<Object>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface MyAppState {
    movies: MovieState[];
}
