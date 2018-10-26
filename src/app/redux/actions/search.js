// @flow

import { YOUTUBE_API_KEY } from '../../config';
import { SEARCH_YOUTUBE } from '../actionTypes';

export function searchYoutube(query: string, pageToken: string = null) {
    return {
        type: SEARCH_YOUTUBE,
        payload: {
            request: {
                url: '/search',
                params: {
                    part: 'snippet',
                    q: query,
                    pageToken,
                    maxResults: 10,
                    key: YOUTUBE_API_KEY
                }
            }
        }
    };
}
