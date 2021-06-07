import * as types from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case types.SIGN_UP_USER_REQUEST:
			localStorage.setItem('porfile', JSON.stringify({ ...action.data }));
			return { ...state, authData: action.data };
		default:
			console.log(`### HELLO DEFAULT`);
			return state;
	}
};

export default authReducer;
