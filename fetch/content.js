import axios from './axios';

export default {
	fetchPosts: async () => await axios().get('/v1/content'),
	createPost: async (postBody, token) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		};

		return await axios().post('/v1/content/create', postBody, {
			headers,
		});
	},
};
