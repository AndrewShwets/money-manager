import { takeLatest, put } from 'redux-saga/effects';
import * as types from 'constants/categories';

function* addCategory(action) {
    yield console.log(action);
    // const { streetID } = action;
    // const searchQuery = `streetId=${streetID}`;
    //
    // yield put(actions.getHouses({ searchQuery }));
}

function* rootSagas() {
    yield takeLatest(types.ON_ADD_CATEGORY, addCategory);
}

export default rootSagas;
