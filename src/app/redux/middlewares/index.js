import { applyMiddleware } from 'redux';

import logger from 'redux-logger';

import axios from './axios';

var middlewares = [ axios ];

// For development
if( process.env.NODE_ENV === 'development' ) {
    middlewares.push(logger);
}

export default applyMiddleware(...middlewares);
