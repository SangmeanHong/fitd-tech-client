import * as types from '../constants/actionTypes';

const authReducer = (state = { authData: null, loading: false }, action) => {
	switch (action.type) {
		case types.SIGN_UP_USER_REQUEST:
			return { ...state, authData: action.payload, loading: true };
		case types.SIGN_UP_USER_SUCCESS:
			return { ...state, authData: action.payload, loading: false };
		case types.SIGN_IN_USER_REQUEST:
			return { ...state, loading: true };
		case types.SIGN_IN_USER_SUCCESS:
			localStorage.setItem('porfile', JSON.stringify({ ...action.payload }));
			return { ...state, authData: action.payload, loading: false };
		case types.SIGN_IN_USER_ERROR:
			return { ...state, authData: action.payload, loading: false };
		default:
			return state;
	}
};

export default authReducer;
