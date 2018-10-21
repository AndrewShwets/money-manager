import withAsyncImport from 'hoc/withAsyncImport';

/**
 * order - needs for render menu items by order
 *
 */
const ROUTES = {
    expenses_summary: {
        order: 0,
        path: '/',
        title: 'Expenses summary',
        component: withAsyncImport(() => import(/* webpackChunkName: "ExpensesSummary" */ 'pages/ExpensesSummary')),
        exact: true,
    },
    expenses_add: {
        order: 1,
        path: '/expenses-add',
        title: 'Add expenses',
        component: withAsyncImport(() => import(/* webpackChunkName: "ExpensesAdd" */ 'pages/ExpensesAdd')),
    },
    categories: {
        order: 2,
        path: '/categories',
        title: 'Categories',
        component: withAsyncImport(() => import(/* webpackChunkName: "Categories" */ 'pages/Categories')),
    },
};

// Ordered routes for menu render
export const ORDERED_ROUTES = (
    Object.values(ROUTES).filter((route) => typeof route.order === 'number').sort((a, b) => a.order - b.order)
);

export default ROUTES;