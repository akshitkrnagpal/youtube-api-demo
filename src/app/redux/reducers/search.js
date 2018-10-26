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
    query: string | null;
    nextPageToken: string | null;
};

const DEFAULT_STATE: State = {
    error: null,
    items: [],
    loading: false,
    query: '',
    nextPageToken: null
}

export default (state: State = DEFAULT_STATE, action: Object) => {
    switch (action.type) {
        case SEARCH_YOUTUBE:

            const items = ( action.payload.request.params.pageToken ) ? state.items : [] ;

            return {
                ...state,
                items,
                loading: true,
                error: null,
            };

        case SEARCH_YOUTUBE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.concat(action.payload.data.items),
                query: action.payload.config.params.q,
                nextPageToken: action.payload.data.nextPageToken
            };

        case SEARCH_YOUTUBE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
                items: []
            };

        default:
            return state;
    }
}
