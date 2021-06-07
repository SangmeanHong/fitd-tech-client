import { combineReducers } from 'redux';
import authReducer from './reducer.auth';

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
