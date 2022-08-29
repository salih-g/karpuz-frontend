import axios from './axios';

export default {
	fetchPosts: async () => await axios().get('/v1/content'),
	fetchPostById: async (postId) => {
		console.log('girdim2');
		return await axios()
			.get(`/v1/content/${postId}`)
			.then((response) => response.data);
	},

	createPost: async (postBody, token) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		};

		return await axios().post('/v1/content/create', postBody, {
			headers,
		});
	},
	likePost: async (postBody, token) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		};

		return await axios().put('/v1/content/likePost', postBody, {
			headers,
		});
	},
};
