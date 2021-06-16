import { all, fork } from 'redux-saga/effects';
import sagaAuth from './sagaAuth';
import sagaForgotPwd from './sagaForgotPwd';
import sagaResetPwd from './sagaResetPwd';

function* rootSaga() {
	yield all([fork(sagaAuth), fork(sagaForgotPwd), fork(sagaResetPwd)]);
}

export default rootSaga;
