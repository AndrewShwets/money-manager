import ROUTES from 'routes';
import getContentRoutesPaths from '../index';

test('Method: \n getContentRoutesPaths', () => {
   expect(getContentRoutesPaths(ROUTES)).toEqual([
       '/',
       '/expenses-add',
       '/categories',
       '/categories/add-category',
   ]);
});