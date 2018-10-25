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

/**
 * Editing expense in collection of expenses
 * @param {string} expense
 * @returns {Promise}
 */
export const editExpense = (expense) => {
    return new Promise((resolve, reject) => {
        try {
            let data = JSON.parse(localStorage.getItem(expenses));

            data = data.map((elem) => (
                elem.id === expense.id
                    ? expense
                    : elem
            ));
            localStorage.setItem(expenses, JSON.stringify(data));

            setTimeout(() => {
                resolve(expense);
            }, DELAY);
        } catch (error) {
            reject(error);
        }
    })
};

/**
 * Deleting expense from collection of expenses
 * @param {string} expenseId
 * @returns {Promise}
 */
export const deleteExpense = (expenseId) => {
    return new Promise((resolve, reject) => {
        try {
            let data = JSON.parse(localStorage.getItem(expenses));

            data = data.filter((elem) => elem.id !== expenseId);
            localStorage.setItem(expenses, JSON.stringify(data));

            setTimeout(() => {
                resolve('success');
            }, 0);
        } catch (error) {
            reject(error);
        }
    })
};




