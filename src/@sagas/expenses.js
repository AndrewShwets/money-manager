import { takeLatest, put } from 'redux-saga/effects';
import * as types from '@constants/expenses';

import {
    addExpenses,
    fetchExpenses,
    editExpense,
    deleteExpense,
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

function* getExpensesSaga() {
    try {
        yield put({ type: types.GET_EXPENSES_REQUEST });
        const result = yield fetchExpenses();
        yield put({ type: types.GET_EXPENSES_SUCCESS, result });
    } catch (error) {
        yield put({ type: types.GET_EXPENSES_FAILURE });
    }
}

function* editExpenseSaga(action) {
    const { history, expense } = action;

    try {
        yield put({ type: types.ADD_EXPENSE_REQUEST });
        yield editExpense(expense);
        yield put({ type: types.ADD_EXPENSE_SUCCESS });

        // To previous state of page filtration
        yield history.goBack();
    } catch (error) {
        yield put({ type: types.ADD_EXPENSE_FAILURE });
    }
}

function* deleteExpenseSaga({ expenseId }) {
    yield deleteExpense(expenseId);
    yield getExpensesSaga();
}

function* rootSagas() {
    yield takeLatest(types.ON_ADD_EXPENSE, addExpensesSaga);
    yield takeLatest([
        types.GET_EXPENSE,
        types.ADD_EXPENSE_SUCCESS,
    ], getExpensesSaga);
    yield takeLatest(types.ON_EDIT_EXPENSE, editExpenseSaga);
    yield takeLatest(types.DELETE_EXPENSE, deleteExpenseSaga);
}

export default rootSagas;
