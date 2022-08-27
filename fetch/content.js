import axios from './axios';

export default {
	fetchPosts: async () => await axios().get('/v1/content'),
};
