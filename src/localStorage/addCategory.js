import categories from 'constants/categories';

/**
 * Saving new category in localStorage
 * @param {string} category
 * @returns {Promise}
 */
const addCategory = (category) => {
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
            }, 1200);
        } catch (error) {
            reject(error);
        }
    })
};

export default addCategory;