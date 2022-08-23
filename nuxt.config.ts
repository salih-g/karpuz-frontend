import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	meta: {
		title: 'Karpuz',
		htmlAttrs: {
			lang: 'en',
			'data-theme': 'karpuzTheme',
		},
	},
	modules: ['@nuxtjs/tailwindcss'],
});
