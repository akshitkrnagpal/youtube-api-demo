import { SET_QUERY } from '../actionTypes';

const DEFAULT_STATE = {
    query: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.query
            };
        default:
            return state;
    }
}
