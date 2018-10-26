// @flow

import { SET_SORT_BY, SET_ORDER } from '../actionTypes';

export function setOrder(order: 'asc' | 'desc') {
    return {
        type: SET_ORDER,
        order
    };
}

export function setSortBy(field: string) {
    return {
        type: SET_SORT_BY,
        field
    };
}
