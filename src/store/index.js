import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form';
import CONFIGS from 'configs';
import rootReducer from 'reducers';
import rootSagas from 'sagas';

const reducers = combineReducers({
    form: formReducer,
    rootReducer,
})

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
    reducers,
    composeEnhancers(
        applyMiddleware(...middlewares),
    ),
);

sagaMiddleware.run(rootSagas);

export default store;




