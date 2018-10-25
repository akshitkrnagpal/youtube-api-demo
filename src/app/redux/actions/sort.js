import { SET_SORT_BY, SET_ORDER } from '../actionTypes';

export function setOrder(order) {
    return {
        type: SET_ORDER,
        order
    };
}

export function setSortBy(field) {
    return {
        type: SET_SORT_BY,
        field
    };
}
