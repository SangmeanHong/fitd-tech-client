import { combineReducers } from 'redux';
import authReducer from './reducer.auth';
import forgotPwdReducer from './reducer.forgotPwd';
import resetPwdReducer from './reducer.resetPwd';
import newCoachReducer from './reducer.newCoach';
import getUsersReducer from './reducer.getUsers'
import approveApplicationReducer from './reducer.ApproveApplication';

const rootReducer = combineReducers({
    authReducer,
    forgotPwdReducer,
    resetPwdReducer,
    newCoachReducer,
    getUsersReducer,
    approveApplicationReducer,
});

export default rootReducer;
