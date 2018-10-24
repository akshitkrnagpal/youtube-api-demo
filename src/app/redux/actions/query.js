import { SET_QUERY } from '../actionTypes';

export function setQuery(query) {
    return {
        type: SET_QUERY,
        query
    };
}
