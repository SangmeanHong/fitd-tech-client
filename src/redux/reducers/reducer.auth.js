import * as types from '../constants/actionTypes';

const initialState = {
    authData: null,
    loading: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP_USER_REQUEST:
            return { ...state, loading: true };
        case types.SIGN_UP_USER_SUCCESS:
            return { ...state, authData: action.payload, loading: false };
        case types.SIGN_UP_USER_ERROR:
            return { ...state, err: 'User already existed', loading: false };
        case types.SIGN_IN_USER_REQUEST:
            return { ...state, loading: true };
        case types.SIGN_IN_USER_SUCCESS:
            localStorage.setItem('porfile', JSON.stringify({ ...action.payload }));
            return { ...state, authData: action.payload, loading: false };
        case types.SIGN_IN_USER_ERROR:
            return { ...state, err: action.payload, loading: false };
        case types.NAME_VALIDATE_ERROR:
            return { ...state, err: action.payload };
        case types.CLEAR_STORE:
            return { ...initialState };
        default:
            return state;
    }
};

export default authReducer;
