import * as types from 'constants/expenses';

export const getExpenses = () => ({
    type: types.GET_EXPENSE,
});

export const deleteExpense = (expenseId) => ({
    type: types.DELETE_EXPENSE,
    expenseId,
});