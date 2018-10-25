import { SET_SORT_BY, SET_ORDER } from '../actionTypes';

const DEFAULT_STATE = {
    sortBy: undefined,
    order: 'asc'
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.field
            }

        case SET_ORDER:
            return {
                ...state,
                order: action.order
            }

        default:
            return state;
    }
}
