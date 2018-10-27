import {
    AddCategoriesModal,
    EditCategoryModal,
    EditExpenseModal,
} from 'components/Modal';
import withAsyncImport from 'hoc/withAsyncImport';
import getContentRoutesPaths from 'utils/getContentRoutesPaths';

/**
 * Routes schema
 * order - needs for render menu items by order
 * content - needs for render only content routes *
 */
const ROUTES = {
    home_page: {
        order: -1,
        content: true,
        path: '/',
        title: 'Home page',
        component: withAsyncImport(() => import(/* webpackChunkName: "HomePage" */ 'pages/Home')),
        exact: true,
    },
    expenses: {
        order: 0,
        content: true,
        path: '/expenses/:id?',
        title: 'Expenses',
        component: withAsyncImport(() => import(/* webpackChunkName: "ExpensesSummary" */ 'pages/ExpensesSummary')),
        subRoute: {
            edit_expense: {
                content: true,
                path: '/expenses/edit-expense/:expense',
                title: 'Edit expense',
                component: EditExpenseModal,
            },
            edit_expense_filtered: {
                content: true,
                path: '/expenses/:id/edit-expense/:expense',
                title: 'Edit expense',
                component: EditExpenseModal,
            },
        },
    },
    expenses_add: {
        order: 1,
        content: true,
        path: '/expenses-add',
        title: 'Add expenses',
        component: withAsyncImport(() => import(/* webpackChunkName: "ExpensesAdd" */ 'pages/ExpensesAdd')),
    },
    categories: {
        order: 2,
        content: true,
        path: '/categories',
        title: 'Categories',
        component: withAsyncImport(() => import(/* webpackChunkName: "Categories" */ 'pages/Categories')),
        subRoute: {
            add_category: {
                content: true,
                path: '/categories/add-category',
                title: 'Add categories',
                component: AddCategoriesModal,
            },
            edit_category: {
                content: true,
                path: '/categories/edit-category/:id',
                title: 'Edit categories',
                component: EditCategoryModal,
            },
        },
    },
    login: {
        order: 3,
        path: '/login',
        title: 'Log out',
        component: withAsyncImport(() => import(/* webpackChunkName: "Login" */ 'pages/Login')),
    },
    noMatch: {
        component: withAsyncImport(() => import(/* webpackChunkName: "NoMatch" */ 'pages/NoMatch')),
    },
};

// Ordered routes for menu render
export const NAVIGATION_ROUTES = (
    Object.values(ROUTES).filter((route) => typeof route.order === 'number').sort((a, b) => a.order - b.order)
);

// Ordered routes for rendering app main content
export const CONTENT_ROUTES = (
    Object.values(ROUTES).filter((route) => route.content)
);

// Valid paths to render for routes with content
export const CONTENT_ROUTES_PATHS = getContentRoutesPaths(ROUTES);

export default ROUTES;