import { combineReducers } from 'redux';
import authReducer from './reducer.auth';
import forgotPwdReducer from './reducer.forgotPwd';
import resetPwdReducer from './reducer.resetPwd';

const rootReducer = combineReducers({
    authReducer,
    forgotPwdReducer,
    resetPwdReducer,
});

export default rootReducer;
