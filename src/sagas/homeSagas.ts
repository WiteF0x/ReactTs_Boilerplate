import {all, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions';

function* setCount({ payload }: any) {
    try {
        yield put(actions.setCount(payload || 0));
    } catch (e) {
        console.error(e);
    }
}

export default function* homeSagas() {
    yield all([
        takeLatest(actions.setCountAction, setCount),
    ]);
}
