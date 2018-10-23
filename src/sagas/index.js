import { fork } from 'redux-saga/effects';

import categories from './categories';

function* rootSagas() {
    yield [
        fork(categories),
    ];
}

export default rootSagas;
