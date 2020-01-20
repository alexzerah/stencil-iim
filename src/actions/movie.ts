import { Dispatch } from "redux";
import API from "../helpers/API";

// Types when asking random quotes
const GET_POPULAR_MOVIE_REQUEST = "GET_POPULAR_MOVIE_REQUEST";
const GET_POPULAR_MOVIE_SUCCESS = "GET_POPULAR_MOVIE_SUCCESS";
const GET_POPULAR_MOVIE_FAILURE = "GET_POPULAR_MOVIE_FAILURE";

export const movieConstants = {
    GET_POPULAR_MOVIE_REQUEST,
    GET_POPULAR_MOVIE_SUCCESS,
    GET_POPULAR_MOVIE_FAILURE
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
