import {quoteConstants} from "../actions/quote";

const getInitialState = (): any => {
    const quote: QuoteState = {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    };

    return {
        loading: false,
        quote,
        error: null
    };
};

const quote = (
    state = getInitialState(),
    action: any
): QuoteState => {
    switch (action.type) {
        case quoteConstants.GET_QUOTE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case quoteConstants.GET_QUOTE_SUCCESS:
            const quote: QuoteState = action.data;
            return {
                ...state,
                loading: false,
                quote
            };
        case quoteConstants.GET_QUOTE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.data
            };
    }
    return state;
};

export default quote;