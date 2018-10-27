import { generatePath } from 'react-router';

/**
 * Gets active menu item by route
 * @param {object} items - menu links
 * @param {string} pathname - app path name
 */
const getActiveMenuRoute = (items, pathname) => {
    let path;

    Object.keys(items).forEach((route) => {
        if(pathname === '/' && route === pathname) {
            path = '/';
        } else if (route !== '/' && ~pathname.indexOf(generatePath(route))){
            path = generatePath(route);
        }
    })

    return path;
}

export default getActiveMenuRoute;