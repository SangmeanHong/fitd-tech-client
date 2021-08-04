import * as types from '../constants/actionTypes';

const actionAddUserSchedule = ({ selectedEvents, coachId, userId }) => {
    return {
        type: types.ADD_USER_SCHEDULE_REQUEST,
        payload: { selectedEvents, coachId, userId },
    };
};

export default actionAddUserSchedule;
