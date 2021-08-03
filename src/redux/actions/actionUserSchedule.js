import * as types from '../constants/actionTypes';

const actionAddUserSchedule = (userSchedule) => {
	return {
		type: types.ADD_USER_SCHEDULE_REQUEST,
		payload: userSchedule,
	};
};

export default actionAddUserSchedule;
