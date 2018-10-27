import { createStructuredSelector, createSelector } from 'reselect';
import REDUCER from '@constants/expenses';

const isAddingExpense = (state) => state[REDUCER].isAddingExpense;
const items = (state) => state[REDUCER].items;
const isLoading = (state) => state[REDUCER].isLoading;

// Expense adding state
const addingExpenseState = createStructuredSelector({
    isAddingExpense,
});

export {
    addingExpenseState,
}

export default createStructuredSelector({
    expenses: createSelector([items, isLoading], (items, isLoading) => ({
        items,
        isLoading,
    })),
});