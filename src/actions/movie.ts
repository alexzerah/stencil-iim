import { Dispatch } from "redux";
import API from "../helpers/API";

// Types when asking popular movies
const GET_POPULAR_MOVIE_REQUEST = "GET_POPULAR_MOVIE_REQUEST";
const GET_POPULAR_MOVIE_SUCCESS = "GET_POPULAR_MOVIE_SUCCESS";
const GET_POPULAR_MOVIE_FAILURE = "GET_POPULAR_MOVIE_FAILURE";

// Types when asking movie with ID
const GET_MOVIE_REQUEST = "GET_MOVIE_REQUEST";
const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
const GET_MOVIE_FAILURE = "GET_MOVIE_FAILURE";

export const movieConstants = {
    GET_POPULAR_MOVIE_REQUEST,
    GET_POPULAR_MOVIE_SUCCESS,
    GET_POPULAR_MOVIE_FAILURE,
    GET_MOVIE_REQUEST,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAILURE
};

export const getPopularMovie = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: movieConstants.GET_POPULAR_MOVIE_REQUEST });
        API.get("/movie/popular")
            .then(response =>
                dispatch({
                    type: movieConstants.GET_POPULAR_MOVIE_SUCCESS,
                    data: response.data.results,
                    totalPages: response.data.total_pages
                })
            )
            .catch(error =>
                dispatch({
                    type: movieConstants.GET_POPULAR_MOVIE_FAILURE,
                    data: error
                })
            );
    };
};

export const getMovieByID = id => {
    return (dispatch: Dispatch) => {
        dispatch({ type: movieConstants.GET_MOVIE_REQUEST });
        API.get(`/movie/${id}`)
            .then(response =>
                dispatch({
                    type: movieConstants.GET_MOVIE_SUCCESS,
                    data: response.data
                })
            )
            .catch(error =>
                dispatch({
                    type: movieConstants.GET_MOVIE_FAILURE,
                    data: error
                })
            );
    };
};
