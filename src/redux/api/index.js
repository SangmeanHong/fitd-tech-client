import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:7000' });

API.interceptors.request.use((req) => {
	console.log('INTERCEPTORS');
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`;
	}
	return req;
});

const signIn = () => {
	// WRITE CODE...
};

const signUp = (formData) => {
	API.post('/api/user/register', formData);
};

export { signUp, signIn };
