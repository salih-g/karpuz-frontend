import axios from './axios';

export default {
	fetchPosts: async () => await axios().get('/v1/content'),
	fetchPostById: async (postId) => {
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
	createComment: async (commentBody, token) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		};

		return await axios().post('/v1/content/comment/create', commentBody, {
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
	likeComment: async (commentBody, token) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		};

		return await axios().put('/v1/content/likeComment', commentBody, {
			headers,
		});
	},
};
