import axios from 'axios';

export const getCoaches = async (search) => {
    let coaches;
    if (search) {
        coaches = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/search/coach/${search}`, {
            withCredentials: true,
        });
    } else {
        coaches = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/search/coach/all`, {
            withCredentials: true,
        });
    }
    return coaches;
};
