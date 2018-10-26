// @flow

import {
    SET_SORT_BY,
    SET_ORDER
} from '../actionTypes';

type State = {
    sortBy: 'string' | typeof undefined;
    order: 'asc' | 'desc';
};

const DEFAULT_STATE: State = {
    sortBy: undefined,
    order: 'asc'
};

export default (state: State = DEFAULT_STATE, action: Object) => {
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
