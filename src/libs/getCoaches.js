import axios from 'axios';

export const getCoaches = async (search) => {
    let coaches;
    if (search) {
        const { data } = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/search/coach/${search}`, {
            withCredentials: true,
        });
        coaches = data.users;
    } else {
        const { data } = await axios.post(`http://localhost:${process.env.REACT_APP_PORT}/api/user/userlist/`, { option: 'coach' }, {
            withCredentials: true,
        });
        coaches = data.users;
    }
    return coaches;
};
