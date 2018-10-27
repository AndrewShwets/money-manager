import getActiveMenuRoute from '../index';

test('getActiveMenuRoute: expenses', () => {
    expect(getActiveMenuRoute(
        {
            "/": '/',
            "/expenses": '/expenses/:id?',
            "/expenses-add": '/expenses-add',
            "/categories": '/categories',
            "/login": '/login',
        },
        '/expenses'
    )).toBe('/expenses');
});

test('getActiveMenuRoute: categories', () => {
    expect(getActiveMenuRoute(
        {
            "/": '/',
            "/expenses/:id?": '/expenses/:id?',
            "/expenses-add": '/expenses-add',
            "/categories": '/categories',
            "/login": '/login',
        },
        '/categories'
    )).toBe('/categories');
});

test('getActiveMenuRoute: login', () => {
    expect(getActiveMenuRoute(
        {
            "/": '/',
            "/expenses/:id?": '/expenses/:id?',
            "/expenses-add": '/expenses-add',
            "/categories": '/categories',
            "/login": '/login',
        },
        '/login'
    )).toBe('/login');
});

test('getActiveMenuRoute: expenses-add', () => {
    expect(getActiveMenuRoute(
        {
            "/": '/',
            "/expenses/:id?": '/expenses/:id?',
            "/expenses-add": '/expenses-add',
            "/categories": '/categories',
            "/login": '/login',
        },
        '/expenses-add'
    )).toBe('/expenses-add');
});

test('getActiveMenuRoute: /', () => {
    expect(getActiveMenuRoute(
        {
            "/": '/',
            "/expenses/:id?": '/expenses/:id?',
            "/expenses-add": '/expenses-add',
            "/categories": '/categories',
            "/login": '/login',
        },
        '/'
    )).toBe('/');
});