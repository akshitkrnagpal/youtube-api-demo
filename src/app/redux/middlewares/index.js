import { applyMiddleware } from 'redux';

import logger from 'redux-logger';

const middlewares = applyMiddleware(
    logger
);

export default middlewares;
