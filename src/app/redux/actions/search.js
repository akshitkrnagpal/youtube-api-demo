import { SEARCH_YOUTUBE } from '../actionTypes';

export function searchYoutube(query) {
    return {
        type: SEARCH_YOUTUBE,
        payload: {
            request: {
                url: '/search',
                params: {
                    part: 'snippet',
                    q: query,
                    key: ''
                }
            }
        }
    };
}
