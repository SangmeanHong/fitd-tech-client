import { all, fork } from 'redux-saga/effects';
import sagaAuth from './sagaAuth';

function* rootSaga() {
	yield all([fork(sagaAuth)]);
}

export default rootSaga;
