const LOCATION = window.location;

const URL_PATTERN = `${LOCATION.protocol}//${LOCATION.hostname}/api/`;

const apiCall = async ({ url = '', method = 'GET' }) => {

    const result = await fetch(`${URL_PATTERN}${url}`, {
        method,
    });

    return Promise.resolve(result.json());
};

export default apiCall;