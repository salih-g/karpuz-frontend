import { defineStore } from 'pinia';

import auth from '~~/fetch/auth';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: null,
		loginError: null,
		registerError: null,
	}),
	actions: {
		async login(userData) {
			try {
				const { user } = await auth.login(userData);

				this.user = user;
				!process.server &&
					window.localStorage.setItem('user', JSON.stringify(user));
				useRouter().push('/');
			} catch (error) {
				this.loginError = error.response.data;
			}
		},

		async register(userData) {
			try {
				const { user } = await auth.register(userData);

				this.user = user;
				!process.server &&
					window.localStorage.setItem('user', JSON.stringify(user));
				useRouter().push('/');
			} catch (error) {
				this.registerError = error.response.data;
			}
		},
		logout() {
			this.user = null;
			!process.server && window.localStorage.clear('user');
		},
	},
});
