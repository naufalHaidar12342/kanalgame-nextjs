/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				Keppel: "#58B09C",
				HunterGreen: "#386150",
				AeroBlue: "#CAF7E2",
				OliveDrab7: "#4A442D",
				OliveDrab7Variant: "#3D3522",
			},
		},
	},
	plugins: [],
};
