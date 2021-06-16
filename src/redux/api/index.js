import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

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
		return await API.post('/api/user/login', { email, password });
	}
};

const signUp = async (formData) => {
	return await API.post('/api/user/register', formData);
};

const apiForgotPwd = async (email) => {
	return await API.post('/api/user/forgot', email);
};

const apiResetPwd = async (data) => {
	console.log(`data`, data);
	return await API.post('/api/user/resetpw', data);
};

export { signUp, signIn, apiForgotPwd, apiResetPwd };
