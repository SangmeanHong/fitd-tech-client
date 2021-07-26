import axios from 'axios';

export const getCoaches = async (search) => {
	let coaches;
	if (search) {
		const { data } = await axios.get(
			`http://localhost:${process.env.REACT_APP_PORT}/api/search/coach/${search}`,
			{
				withCredentials: true,
			}
		);
		coaches = data;
	} else {
		const { data } = await axios.get(
			`http://localhost:${process.env.REACT_APP_PORT}/api/search/coach/all`,
			{
				withCredentials: true,
			}
		);
		const coachResults = data;
		coaches = coachResults;
	}
	return coaches;
};
