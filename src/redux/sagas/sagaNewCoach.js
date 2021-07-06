import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
//import { signUp, signIn } from '../api';
import * as types from '../constants/actionTypes';

function* newCoach(action) {
	try {
		const result = yield call(newCoach, action.payload);
		const { success, error } = result.data;
		if (success) {
			yield put({ type: types.NEW_COACH_SUCCESS, payload: { success } });
		} else {
			yield put({ type: types.NEW_COACH_ERROR, payload: error.name });
		}
	} catch (error) {
		yield put({ type: types.NEW_COACH_ERROR, payload: error });
	}
}

function* watchNewCoach() {
	yield takeEvery(types.SIGN_UP_USER_REQUEST, newCoach);
}

export default function* sagaNewCoach() {
	yield all([fork(watchNewCoach)]);
}
