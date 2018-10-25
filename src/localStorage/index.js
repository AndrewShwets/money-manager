import categories from 'constants/categories';
import expenses from 'constants/expenses';
import { CATEGORIES, EXPENSES } from './bootsrtap';

const initAppLocalStorage = () => {
    // Initialization of categories
    if (!localStorage.getItem(categories)) {
        localStorage.setItem(categories, JSON.stringify(CATEGORIES));
    }

    if (!localStorage.getItem(expenses)) {
        localStorage.setItem(expenses, JSON.stringify(EXPENSES));
    }
};

export default initAppLocalStorage;