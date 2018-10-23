import React from 'react';
import withAsyncImport from 'hoc/withAsyncImport';

/**
 * Routes schema
 * order - needs for render menu items by order
 * content - needs for render only content routes *
 */
const ROUTES = {
    expenses_summary: {
        order: 0,
        content: true,
        path: '/',
        title: 'Expenses summary',
        component: withAsyncImport(() => import(/* webpackChunkName: "ExpensesSummary" */ 'pages/ExpensesSummary')),
        exact: true,
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
        actions: {
            add_category: {
                path: '/categories/add-category',
                title: 'Add categories',
                component: () => <div>Test</div>,
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
export const CONTENT_ROUTES_PATHS = CONTENT_ROUTES.map((route) => route.path);

export default ROUTES;