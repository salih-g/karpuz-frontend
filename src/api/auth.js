import axios from './axios';

export default {
	login: async (user) => {
		return await axios()
			.post('/v1/auth/login', {
				username: user.username,
				password: user.password,
			})
			.then(({ data }) => data)
			.catch((err) => err);
	},
	register: async (user) => {
		return await axios()
			.post('/v1/auth/register', {
				username: user.username,
				password: user.password,
			})
			.then(({ data }) => data)
			.catch((err) => err);
	},
};
