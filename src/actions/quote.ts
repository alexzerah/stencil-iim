import { Dispatch } from "redux";
import API from "../helpers/API";

// Types when asking random quotes
const GET_QUOTE_REQUEST = "GET_QUOTE_REQUEST";
const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS";
const GET_QUOTE_FAILURE = "GET_QUOTE_FAILURE";

export const quoteConstants = {
    GET_QUOTE_REQUEST,
    GET_QUOTE_SUCCESS,
    GET_QUOTE_FAILURE
};

export const getRandomQuote = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: quoteConstants.GET_QUOTE_REQUEST });
        API.get("/todos/1")
            .then(response =>
                dispatch({
                    type: quoteConstants.GET_QUOTE_SUCCESS,
                    data: response.data
                })
            )
            .catch(error =>
                dispatch({
                    type: quoteConstants.GET_QUOTE_FAILURE,
                    data: error
                })
            );
    };
};