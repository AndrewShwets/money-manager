import { createStructuredSelector, createSelector } from 'reselect';
import REDUCER from '@constants/categories';

const isAddingCategory = (state) => state[REDUCER].isAddingCategory;
const items = (state) => state[REDUCER].items;
const isLoading = (state) => state[REDUCER].isLoading;

// Category adding state
const addingCategoryState = createStructuredSelector({
    isAddingCategory,
});

export {
    addingCategoryState,
}

export default createStructuredSelector({
    categories: createSelector([items, isLoading], (items, isLoading) => ({
        items,
        isLoading,
    })),
});