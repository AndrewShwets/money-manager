import { combineReducers } from 'redux';
import * as types from '@constants/expenses';

const initialState = {
    items: [],
    isLoading: false,
    isAddingExpense: false,
};

export default combineReducers({
    items(state = initialState.items, action) {
        switch (action.type){
            case types.GET_EXPENSES_SUCCESS:
                return action.result;
            default:
                return state;
        }
    },
    isLoading(state = initialState.isLoading, action) {
        switch (action.type){
            case types.GET_EXPENSES_REQUEST:
                return true;
            case types.GET_EXPENSES_SUCCESS:
            case types.GET_EXPENSES_FAILURE:
                return false;
            default:
                return state;
        }
    },
    isAddingExpense(state = initialState.isAddingExpense, action) {
        switch (action.type){
            case types.ADD_EXPENSE_REQUEST:
                return true;
            case types.ADD_EXPENSE_SUCCESS:
            case types.ADD_EXPENSE_FAILURE:
                return false;
            default:
                return state;
        }
    },
});