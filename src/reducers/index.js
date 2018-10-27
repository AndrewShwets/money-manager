import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import categories from './categories';
import expenses from './expenses';

export default combineReducers({
    categories,
    expenses,
    formReducer,
});