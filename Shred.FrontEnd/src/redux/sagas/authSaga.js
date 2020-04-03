import {put} from 'redux-saga/effects';
import * as api from '../../api/apiService';
import ACTION from '../action/actionTypes';
import {history} from "../../utils/history";

export function* loginSaga(action) {
    yield put({type: ACTION.LOGIN_REQUEST});
    const authData = action.data;
    
    try{
        const {data} = yield api.loginApi(authData);
        const accsessToken = data.accsessToken;
        localStorage.getItem('token', accsessToken);
        yield put({type: ACTION.LOGIN_RESPONS, authData: data});
        histori.push('/calendar');
    }catch (e) {
        yield put({type: ACTION.LOGIN_ERROR, message: 'Something went wrong'});
    }
}