import categories from 'constants/categories';

const initAppLocalStorage = () => {
    // Initialization of categories
    if (!localStorage.getItem(categories)) {
        localStorage.setItem(categories, JSON.stringify([]));
    }
};

export default initAppLocalStorage;