import { all, fork } from 'redux-saga/effects';
import sagaAuth from './sagaAuth';
import sagaForgotPwd from './sagaForgotPwd';
import sagaResetPwd from './sagaResetPwd';
import sagaNewCoach from './sagaNewCoach';
import sagaGetUsers from './sagaGetUsers';
import sagaApproveApplication from './sagaApproveApplication';

function* rootSaga() {
    yield all([
        fork(sagaAuth),
        fork(sagaForgotPwd),
        fork(sagaResetPwd),
        fork(sagaNewCoach),
        fork(sagaGetUsers),
        fork(sagaApproveApplication),
    ]);
}

export default rootSaga;
