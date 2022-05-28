import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					// treat all tags with a dash as custom elements
					isCustomElement: (tag) => tag.includes('progress'),
				},
			},
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
