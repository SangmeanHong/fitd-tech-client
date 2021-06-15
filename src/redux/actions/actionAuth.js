import * as types from '../constants/actionTypes';

const actionSignUp = (formData) => {
	return {
		type: types.SIGN_UP_USER_REQUEST,
		payload: formData,
	};
};

const actionSignIn = (formData) => {
	return {
		type: types.SIGN_IN_USER_REQUEST,
		payload: formData,
	};
};

export { actionSignUp, actionSignIn };
