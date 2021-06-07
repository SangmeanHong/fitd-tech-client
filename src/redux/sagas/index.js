import { all, fork } from 'redux-saga/effects';
import sagaSignUp from './saga.signup';

function* rootSaga() {
	yield all([fork(sagaSignUp)]);
}

export default rootSaga;
