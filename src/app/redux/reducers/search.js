import {
    SEARCH_YOUTUBE,
    SEARCH_YOUTUBE_SUCCESS,
    SEARCH_YOUTUBE_FAIL
} from '../actionTypes';

const DEFAULT_STATE = {
    error: null,
    items: [],
    loading: false
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SEARCH_YOUTUBE:
            return {
                ...state,
                loading: true,
                error: null
            };

        case SEARCH_YOUTUBE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.data.items
            };

        case SEARCH_YOUTUBE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error.response.data.error,
                items: []
            };

        default:
            return state;
    }
}
