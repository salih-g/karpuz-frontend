import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3Sanitize from 'vue-3-sanitize';

import App from './App.vue';

import router from './router';

import './css/main.css';

const defaultOptions = {
	allowedTags: ['a', 'b'],
	allowedAttributes: {
		a: ['href', 'target', 'style'],
	},
};

const app = createApp(App);

app.use(router);
app.use(Vue3Sanitize, defaultOptions);
app.use(createPinia());

app.mount('#app');
