import ROUTES from 'routes';
import getContentRoutesPaths from '../index';

/**
 * All possible routes
 */
test('Method: \n getContentRoutesPaths', () => {
    expect(getContentRoutesPaths(ROUTES)).toEqual([
        '/',
        '/expenses/:id?',
        '/expenses/edit-expense/:expense',
        '/expenses/:id/edit-expense/:expense', // Edit expense with selected filter
        '/expenses-add',
        '/categories',
        '/categories/add-category',
        '/categories/edit-category/:id',
    ]);
});