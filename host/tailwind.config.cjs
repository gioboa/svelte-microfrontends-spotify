const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../remote/src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	options: {
		safelist: [/(from|via|to|border|bg|text|flex)-(.*)-(\\d{1}0{1,2})/],
	},
};

module.exports = config;
