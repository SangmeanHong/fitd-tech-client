import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { apiApproveApplications } from '../api';
import * as types from '../constants/actionTypes';

function* approveApplication(action) {
	try {
		const result = yield call(apiApproveApplications, '1234');
		console.log(`어프루브리져트`, result);
		yield put({
			type: types.APPROVE_APPLICATION_SUCCESS,
			payload: result.data.users,
		});
	} catch (error) {
		yield put({ type: types.APPROVE_APPLICATION_FAIL, payload: error });
	}
}

function* watchApproveApplication() {
	yield takeEvery(types.APPROVE_APPLICATION_REQUEST, approveApplication);
}

export default function* sagaApproveApplication() {
	yield all([fork(watchApproveApplication)]);
}
