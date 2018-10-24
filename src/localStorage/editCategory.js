import categories from 'constants/categories';

/**
 * Editing category in collection of categories
 * @param {string} category
 * @returns {Promise}
 */
const editCategory = (category) => {
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
            }, 1200);
        } catch (error) {
            reject(error);
        }
    })
};

export default editCategory;