import { combineReducers } from 'redux';

import form from './form';
import categories from './categories';
import expenses from './expenses';

export default combineReducers({
    categories,
    expenses,
    form,
});