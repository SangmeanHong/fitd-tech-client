// import axios from 'axios';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { signUp, signIn } from '../api';
import * as types from '../constants/actionTypes';

function* signUpUser(action) {
	try {
		const { success } = yield call(signUp, action.payload);
		yield put({ type: types.SIGN_UP_USER_SUCCESS, payload: success });
	} catch (error) {
		yield put({ type: types.SIGN_UP_USER_ERROR, payload: error });
	}
}

function* watchSignUpUser() {
	yield takeEvery(types.SIGN_UP_USER_REQUEST, signUpUser);
}

function* signInUser(action) {
	try {m
		const { data } = yield call(signIn, action.payload);
		yield put({ type: types.SIGN_IN_USER_SUCCESS, payload: data });
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
