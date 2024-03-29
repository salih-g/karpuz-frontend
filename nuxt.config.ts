import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
	meta: {
		title: 'Karpuz',
		htmlAttrs: {
			lang: 'en',
			'data-theme': 'karpuzTheme',
		},
	},
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
	runtimeConfig: {
		public: {
			baseUrl: process.env.BACKEND_URL,
		},
	},
});
