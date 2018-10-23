import { combineReducers } from 'redux';
import * as types from 'constants/categories';

const initialState = {
    items: [],
    isLoading: false,
    isAddingCategory: false,
};

export default combineReducers({
    items(state = initialState.items, action) {
        switch (action.type){

            default:
                return state;
        }
    },
    isLoading(state = initialState.isLoading, action) {
        switch (action.type){

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
            default:
                return state;
        }
    },
});