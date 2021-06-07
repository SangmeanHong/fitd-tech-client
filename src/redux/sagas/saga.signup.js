// import axios from 'axios';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { signUp } from '../api';
import * as types from '../constants/actionTypes';

function* signUpUser(action) {
	try {
		const result = yield call(signUp, action.payload);
		yield put({ type: types.SIGN_UP_USER_SUCCESS, payload: result.formData });
	} catch (error) {
		yield put({ type: types.SIGN_UP_USER_ERROR, payload: error });
	}
}

function* watchSignUpUser() {
	yield takeEvery(types.SIGN_UP_USER_REQUEST, signUpUser);
}

export default function* sagaSignUp() {
	yield all([fork(watchSignUpUser)]);
}
