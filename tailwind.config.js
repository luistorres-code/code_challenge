/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#161a1d",
				"green-dexcom": "#0daf2a",
				"green-dexcom-dark": "#137D00",
				light: "#f2f2f2",
			},
		},
	},
	plugins: [],
};
