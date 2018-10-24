import expenses from 'constants/expenses';

const DELAY = 1000;

/**
 * Saving new expenses in localStorage
 * @param {string} expenses
 * @returns {Promise}
 */
export const addExpenses = (expense) => {
    return new Promise((resolve, reject) => {
        try {
            const data = JSON.parse(localStorage.getItem(expenses));
            const DATE = new Date();

            const newExpense = {
                ...expense,
                id: DATE.getTime().toString(16),
                createdAt: DATE.toISOString(),
            };

            data.push(newExpense);
            localStorage.setItem(expenses, JSON.stringify(data));

            setTimeout(() => {
                resolve(newExpense);
            }, DELAY);
        } catch (error) {
            reject(error);
        }
    })
};

/**
 * Fetching expenses collection
 * @returns {Promise}
 */
export const fetchExpenses = () => {
    return new Promise((resolve, reject) => {
        try {
            const data = JSON.parse(localStorage.getItem(expenses));

            setTimeout(() => {
                resolve(data);
            }, DELAY);
        } catch (error) {
            reject(error);
        }
    })
};

// /**
//  * Deleting category from collection of categories
//  * @param {string} categoryId
//  * @returns {Promise}
//  */
// export const deleteCategory = (categoryId) => {
//     return new Promise((resolve, reject) => {
//         try {
//             let data = JSON.parse(localStorage.getItem(categories));
//
//             data = data.filter((elem) => elem.id !== categoryId);
//             localStorage.setItem(categories, JSON.stringify(data));
//
//             setTimeout(() => {
//                 resolve('success');
//             }, 0);
//         } catch (error) {
//             reject(error);
//         }
//     })
// };
//
// /**
//  * Editing category in collection of categories
//  * @param {string} category
//  * @returns {Promise}
//  */
// export const editCategory = (category) => {
//     return new Promise((resolve, reject) => {
//         try {
//             let data = JSON.parse(localStorage.getItem(categories));
//
//             data = data.map((elem) => (
//                 elem.id === category.id
//                     ? category
//                     : elem
//             ));
//             localStorage.setItem(categories, JSON.stringify(data));
//
//             setTimeout(() => {
//                 resolve(category);
//             }, DELAY);
//         } catch (error) {
//             reject(error);
//         }
//     })
// };
//


