// @flow

import {
    SEARCH_YOUTUBE,
    SEARCH_YOUTUBE_SUCCESS,
    SEARCH_YOUTUBE_FAIL
} from '../actionTypes';

type State = {
    error: Object | null;
    items: Array<Object>;
    loading: boolean;
};

const DEFAULT_STATE: State = {
    error: null,
    items: [],
    loading: false
}

export default (state: State = DEFAULT_STATE, action: Object) => {
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
