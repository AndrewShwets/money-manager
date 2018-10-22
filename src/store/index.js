import { createStore, applyMiddleware } from 'redux';

import CONFIGS from 'configs';

import rootReducer from 'reducers';

const middlewares = [];

if (CONFIGS.IS_DEV) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

export default store;




