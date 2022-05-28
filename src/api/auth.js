import axios from './axios';

export default {
	login: async (user) => {
		const res = await axios().post('/v1/auth/login', {
			username: user.username,
			password: user.password,
		});

		return res.data;
	},
	register: async (user) => {
		const res = await axios().post('/v1/auth/register', {
			username: user.username,
			password: user.password,
		});

		return res.data;
	},
};
