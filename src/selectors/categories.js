import { createStructuredSelector, createSelector } from 'reselect';
import REDUCER from 'constants/categories';

const isAddingCategory = (state) => state.rootReducer[REDUCER].isAddingCategory;
const items = (state) => state.rootReducer[REDUCER].items;
const isLoading = (state) => state.rootReducer[REDUCER].isLoading;

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