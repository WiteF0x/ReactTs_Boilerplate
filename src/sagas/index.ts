import {fork} from 'redux-saga/effects';
import homeSagas from './homeSagas';

export default function* rootSaga() {
  yield fork(homeSagas);
}
