import { createStore } from 'redux';

import middlewares from './middlewares';
import reducers from './reducers'

const store = createStore(reducers, middlewares);

export default store;
