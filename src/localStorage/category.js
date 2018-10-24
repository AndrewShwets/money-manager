import categories from 'constants/categories';

const DELAY = 1000;

/**
 * Saving new category in localStorage
 * @param {string} category
 * @returns {Promise}
 */
export const addCategory = (category) => {
    return new Promise((resolve, reject) => {
        try {
            const data = JSON.parse(localStorage.getItem(categories));
            const DATE = new Date();

            data.push({
                name: category,
                id: DATE.getTime().toString(16),
                createdAt: DATE.toISOString(),
            });
            localStorage.setItem(categories, JSON.stringify(data));

            setTimeout(() => {
                resolve(category);
            }, DELAY);
        } catch (error) {
            reject(error);
        }
    })
};

/**
 * Deleting category from collection of categories
 * @param {string} categoryId
 * @returns {Promise}
 */
export const deleteCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        try {
            let data = JSON.parse(localStorage.getItem(categories));

            data = data.filter((elem) => elem.id !== categoryId);
            localStorage.setItem(categories, JSON.stringify(data));

            setTimeout(() => {
                resolve('success');
            }, 0);
        } catch (error) {
            reject(error);
        }
    })
};

/**
 * Editing category in collection of categories
 * @param {string} category
 * @returns {Promise}
 */
export const editCategory = (category) => {
    return new Promise((resolve, reject) => {
        try {
            let data = JSON.parse(localStorage.getItem(categories));

            data = data.map((elem) => (
                elem.id === category.id
                    ? category
                    : elem
            ));
            localStorage.setItem(categories, JSON.stringify(data));

            setTimeout(() => {
                resolve(category);
            }, DELAY);
        } catch (error) {
            reject(error);
        }
    })
};

/**
 * Fetching categories collection
 * @returns {Promise}
 */
export const fetchCategories = () => {
    return new Promise((resolve, reject) => {
        try {
            const data = JSON.parse(localStorage.getItem(categories));

            setTimeout(() => {
                resolve(data);
            }, DELAY);
        } catch (error) {
            reject(error);
        }
    })
};

