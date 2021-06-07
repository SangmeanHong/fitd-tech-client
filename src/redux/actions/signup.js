import * as types from '../constants/actionTypes';

const actionSignup = (formData) => {
	return {
		type: types.SIGN_UP_USER_REQUEST,
		payload: formData,
	};
};

export default actionSignup;
