import { combineReducers } from 'redux';
import * as types from '@constants/categories';

const initialState = {
    items: [],
    isLoading: false,
    isAddingCategory: false,
};

export default combineReducers({
    items(state = initialState.items, action) {
        switch (action.type){
            case types.GET_CATEGORIES_SUCCESS:
                return action.result;
            default:
                return state;
        }
    },
    isLoading(state = initialState.isLoading, action) {
        switch (action.type){
            case types.GET_CATEGORIES_REQUEST:
                return true;
            case types.GET_CATEGORIES_SUCCESS:
            case types.GET_CATEGORIES_FAILURE:
                return false;
            default:
                return state;
        }
    },
    isAddingCategory(state = initialState.isAddingCategory, action) {
        switch (action.type){
            case types.ADD_CATEGORY_REQUEST:
                return true;
            case types.ADD_CATEGORY_SUCCESS:
            case types.ADD_CATEGORY_FAILURE:
                return false;
            default:
                return state;
        }
    },
});