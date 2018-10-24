import { takeLatest, put } from 'redux-saga/effects';
import * as types from 'constants/expenses';

import {
    addExpenses,
    fetchExpenses,
} from 'localStorage/expenses';

function* addExpensesSaga(action) {
    const { resetForm, expense } = action;

    try {
        yield put({ type: types.ADD_EXPENSE_REQUEST });

        yield addExpenses(expense);

        yield put({ type: types.ADD_EXPENSE_SUCCESS });

        yield resetForm();
    } catch (error) {
        yield put({ type: types.ADD_EXPENSE_FAILURE });
    }
}

function* getExpenseSaga() {
    try {
        yield put({ type: types.GET_EXPENSES_REQUEST });

        const result = yield fetchExpenses();

        yield put({ type: types.GET_EXPENSES_SUCCESS, result });
    } catch (error) {
        yield put({ type: types.GET_EXPENSES_FAILURE });
    }
}

function* rootSagas() {
    yield takeLatest(types.ON_ADD_EXPENSE, addExpensesSaga);
    yield takeLatest([
        types.GET_EXPENSE,
        types.ADD_EXPENSE_SUCCESS,
    ], getExpenseSaga);
}

export default rootSagas;
