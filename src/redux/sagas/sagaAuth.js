// import axios from 'axios';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { signUp, signIn } from '../api';
import * as types from '../constants/actionTypes';

function* signUpUser(action) {
	try {
		const result = yield call(signUp, action.payload);
		const { success, err } = result.data;
		if (success) {
			yield put({ type: types.SIGN_UP_USER_SUCCESS, payload: { success } });
		} else {
			yield put({ type: types.SIGN_UP_USER_ERROR, payload: err.name });
		}
	} catch (error) {
		yield put({ type: types.SIGN_UP_USER_ERROR, payload: error });
	}
}

function* watchSignUpUser() {
	yield takeEvery(types.SIGN_UP_USER_REQUEST, signUpUser);
}

function* signInUser(action) {
	try {
		const { data } = yield call(signIn, action.payload);
		console.log('data :>> ', data);
		if (data.userId) {
			yield put({ type: types.SIGN_IN_USER_SUCCESS, payload: data });
		} else {
			yield put({ type: types.SIGN_IN_USER_ERROR, payload: data.message });
		}
	} catch (error) {
		yield put({ type: types.SIGN_IN_USER_ERROR, payload: error });
	}
}

function* watchSignInUser() {
	yield takeEvery(types.SIGN_IN_USER_REQUEST, signInUser);
}

export default function* sagaAuth() {
	yield all([fork(watchSignUpUser), fork(watchSignInUser)]);
}
