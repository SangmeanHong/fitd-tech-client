import { combineReducers } from 'redux';
import authReducer from './reducer.auth';
import forgotPwdReducer from './reducer.forgotPwd';
import resetPwdReducer from './reducer.resetPwd';
import newCoachReducer from './reducer.newCoach';

const rootReducer = combineReducers({
	authReducer,
	forgotPwdReducer,
	resetPwdReducer,
	newCoachReducer,
});

export default rootReducer;
