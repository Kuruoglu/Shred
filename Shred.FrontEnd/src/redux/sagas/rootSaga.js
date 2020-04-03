import {takeLatest} from 'redux-saga/effects';
import ACTION from '../action/actionTypes';
import * as authSaga from './authSaga';

//Watcher

function* rootSaga() {
    yield takeLatest(ACTION.LOGIN, authSaga.loginSaga);
}

export default rootSaga;