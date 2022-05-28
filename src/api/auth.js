import axios from './axios';

export default {
	login: async (user) => {
		return await axios().post('/v1/auth/login', {
			username: user.username,
			password: user.password,
		});
	},
	register: async (user) => {
		return await axios().post('/v1/auth/register', {
			username: user.username,
			password: user.password,
		});
	},
};
