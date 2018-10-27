import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import CONFIGS from 'configs';
import rootReducer from 'reducers';
import rootSagas from 'sagas';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable */
const composeEnhancers = (
    typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
);
/* eslint-enable */

const middlewares = [
    sagaMiddleware,
];

if (CONFIGS.IS_DEV) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares),
    ),
);

sagaMiddleware.run(rootSagas);

export default store;




