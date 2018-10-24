import * as types from 'constants/categories';

export const getCategories = () => ({
    type: types.GET_CATEGORIES,
});

export const deleteCategory = (categoryId) => ({
    type: types.DELETE_CATEGORY,
    categoryId,
});