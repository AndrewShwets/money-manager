import { takeLatest, put } from 'redux-saga/effects';
import * as types from 'constants/categories';
import ROUTES from 'routes';

import addCategory from 'localStorage/addCategory';
import fetchCategories from 'localStorage/fetchCategories';

function* updateCategories(action) {
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

function* addCategorySuccess(redirect, action) {
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

function* rootSagas() {
    yield takeLatest(types.ON_ADD_CATEGORY, updateCategories);
    yield takeLatest(types.ADD_CATEGORY_SUCCESS, addCategorySuccess, true);
    yield takeLatest(types.GET_CATEGORIES, addCategorySuccess, false);
}

export default rootSagas;
