/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#161a1d",
				"green-dexcom": "#0daf2a",
				"green-dexcom-dark": "#137D00",
				light: "#f5f5f5",
			},
		},
	},
	plugins: [],
};
