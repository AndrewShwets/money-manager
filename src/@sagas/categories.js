import { takeLatest, put } from 'redux-saga/effects';
import * as types from '@constants/categories';
import ROUTES from 'routes';

import {
    addCategory,
    fetchCategories,
    editCategory,
    deleteCategory,
} from 'localStorage/category';

function* updateCategoriesSaga(action) {
    const { category, history } = action;

    try {
        yield put({ type: types.ADD_CATEGORY_REQUEST });
        const addedCategory = yield addCategory(category);
        yield put({
            type: types.ADD_CATEGORY_SUCCESS,
            history,
            category: addedCategory,
        });
    } catch (error) {
        yield put({ type: types.ADD_CATEGORY_FAILURE });
    }
}

function* editCategorySaga(action) {
    const { history, category } = action;

    try {
        yield put({ type: types.ADD_CATEGORY_REQUEST });
        const result = yield editCategory(category);
        yield put({ type: types.ADD_CATEGORY_SUCCESS, result });

        // Redirects only after successed adding of categories item
        if (history) {
            // Goes back to category page
            yield history.push(ROUTES.categories.path);
        }
    } catch (error) {
        yield put({ type: types.ADD_CATEGORY_FAILURE });
    }
}

/**
 * After successful adding or retrieving
 * @param redirect
 * @param action
 */
function* fetchCategoriesSaga(redirect, action) {
    const { history } = action;

    try {
        yield put({ type: types.GET_CATEGORIES_REQUEST });
        // Redirects only after successed adding of categories item
        if (redirect && history) {
            // Goes back to category page
            yield history.push(ROUTES.categories.path);
        }

        const result = yield fetchCategories();
        yield put({ type: types.GET_CATEGORIES_SUCCESS, result });
    } catch (error) {
        yield put({ type: types.GET_CATEGORIES_FAILURE });
    }
}

function* deleteCategorySaga(action) {
    yield deleteCategory(action.categoryId);
    yield fetchCategoriesSaga(false, action);
}

function* rootSagas() {
    yield takeLatest(types.ON_ADD_CATEGORY, updateCategoriesSaga);
    yield takeLatest(types.ADD_CATEGORY_SUCCESS, fetchCategoriesSaga, true);
    yield takeLatest(types.GET_CATEGORIES, fetchCategoriesSaga, false);
    yield takeLatest(types.ON_EDIT_CATEGORY, editCategorySaga);
    yield takeLatest(types.DELETE_CATEGORY, deleteCategorySaga);
}

export default rootSagas;
