export default defineNuxtRouteMiddleware((to, from) => {
	let user;
	if (process.client) {
		user = JSON.parse(window.localStorage.getItem('user'));
	}
	if ((to.name === 'login' || to.name === 'register') && user) {
		return navigateTo('/');
	}
});
