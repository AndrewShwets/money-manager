import categories from 'constants/categories';
import expenses from 'constants/expenses';

const initAppLocalStorage = () => {
    // Initialization of categories
    if (!localStorage.getItem(categories)) {
        localStorage.setItem(categories, JSON.stringify([]));
    }

    if (!localStorage.getItem(expenses)) {
        localStorage.setItem(expenses, JSON.stringify([]));
    }
};

export default initAppLocalStorage;