/**
 * Get all content routes paths
 * @returns {Array}
 */
const getContentRoutesPaths = (ROUTES) => {
    const CONTENT_ROUTES_PATHS = [];

    const routeIterator = (routes) => {
        Object.values(routes).forEach((route) => {
            if (route.content) CONTENT_ROUTES_PATHS.push(route.path);

            if (route.subRoute) routeIterator(route.subRoute);
        })
    };

    routeIterator(ROUTES);

    return CONTENT_ROUTES_PATHS;
};

export default getContentRoutesPaths;