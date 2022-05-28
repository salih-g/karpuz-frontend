import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [Vue()],
	test: {
		globals: true,
		environment: 'jsdom',
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
