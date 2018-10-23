import categories from 'constants/categories';

const addCategory = (category) => {
    return new Promise((resolve) => {
        const data = JSON.parse(localStorage.getItem(categories));
        data.push(category);
        localStorage.setItem(JSON.parse(data));

        setTimeout(() => {
            resolve(category);
        }, 200);
    })
};

export default addCategory;