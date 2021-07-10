import axios from 'axios';

const API = axios.create({
	baseURL: `http://localhost:${process.env.REACT_APP_PORT}`,
});
API.interceptors.request.use((req) => {
	console.log('INTERCEPTORS');
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`;
	}
	return req;
});

const signIn = async (formData) => {
	console.log(`formData`, formData);
	const { email, password, token } = formData;
	if (token) {
		return await API.post('/api/user/google', { token });
	} else {
		return await API.post(
			'/api/user/login',
			{ email, password },
			{
				withCredentials: true,
			}
		);
	}
};

const apiLogout = async () => {
	return await API.get('/api/user/logout', { withCredentials: true });
};

const getUserInfo = async () => {
	return await API.get('/api/user/auth', { withCredentials: true });
};

const signUp = async (formData) => {
	return await API.post('/api/user/register', formData);
};

const apiForgotPwd = async (email) => {
	return await API.post('/api/user/forgot', email);
};

const apiResetPwd = async (data) => {
	return await API.post('/api/user/resetpw', data);
};

const apiNewCoach = async (formData) => {
	return await API.post('/api/user/request-coach', formData, {
		withCredentials: true,
	});
};

const apiGetUsers = async () => {
	return await API.post(
		'/api/user/userlist',
		{ option: 'all' },
		{
			withCredentials: true,
		}
	);
};

const apiApplications = async () => {
	return await API.post(
		'/api/user/getApplication',
		{},
		{
			withCredentials: true,
		}
	);
};

const apiApproveApplications = async (userId) => {
	return await API.post(
		'/api/user/approve-coach',
		{ _id: userId },
		{
			withCredentials: true,
		}
	);
};

const apiAddContent = async (addContentObj) => {
	return await API.post('/api/content', addContentObj, {
		withCredentials: true,
	});
};

export {
	signUp,
	signIn,
	apiForgotPwd,
	apiResetPwd,
	apiNewCoach,
	getUserInfo,
	apiLogout,
	apiGetUsers,
	apiApplications,
	apiApproveApplications,
	apiAddContent,
};
