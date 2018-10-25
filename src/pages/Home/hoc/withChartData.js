import React from 'react';

/**
 * Normalisation of expenses collection
 * @param items
 * @returns {{}}
 */
const normalize = (items) => {
    const data = {};

    items.forEach((expense) => {

        if (data[expense.categoryId]) {
            data[expense.categoryId].push(expense);
        } else {
            data[expense.categoryId] = [expense];
        }

    });

    Object.keys(data).forEach((key) => {
        data[key] = data[key].reduce((obj, expenses) => {
            return ({
                expenseDate: [...obj.expenseDate, new Date(expenses.expenseDate).getTime()],
                expenseSum: +obj.expenseSum +  +expenses.expenseSum,
            })
        }, {
            expenseDate: [],
            expenseSum: 0,
        })
    });

    return data;
};

const withChartData = (ComposedComponent) => (props) => {
    const {
        expenses: {
            items,
        },
    } = props;

    return (
        <ComposedComponent
            {...props}
            normalizedExpenses={normalize(items)}
        />
    );
};

export default withChartData;