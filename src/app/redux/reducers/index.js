import { combineReducers } from 'redux';

import search from './search';
import sort from './sort';

const reducers = combineReducers({
    search,
    sort
});

export default reducers;
