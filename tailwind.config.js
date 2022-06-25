module.exports = {
	daisyui: {
		themes: [
			{
				karpuzTheme: {
					primary: '#f66667',
					secondary: '#89edc8',
					accent: '#bbf57b',
					neutral: '#261E29',
					'base-100': '#202024',
					info: '#4b5564',
					success: '#408001',
					warning: '#F1C946',
					error: '#f67171',
				},
			},
		],
	},
	content: ['./src/**/*.{vue,js,ts}'],
	plugins: [require('daisyui')],
};
