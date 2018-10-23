import categories from 'constants/categories';

const fetchCategories = () => {
    return new Promise((resolve, reject) => {
        try {
            const data = JSON.parse(localStorage.getItem(categories));

            setTimeout(() => {
                resolve(data);
            }, 1200);
        } catch (error) {
            reject(error);
        }
    })

};

export default fetchCategories;