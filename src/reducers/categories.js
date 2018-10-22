import { combineReducers } from 'redux';

const initialState = {
    items: [],
    isLoading: false,
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
});