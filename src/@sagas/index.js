import { fork } from 'redux-saga/effects';

import categories from './categories';
import expenses from './expenses';

function* rootSagas() {
    yield [
        fork(categories),
        fork(expenses),
    ];
}

export default rootSagas;
