import { applyMiddleware } from 'redux';

import logger from 'redux-logger';

import axios from './axios';

const middlewares = applyMiddleware(
    axios,
    logger
);

export default middlewares;
