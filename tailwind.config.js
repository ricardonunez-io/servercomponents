/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
		"./public/**/*.{js,ts,jsx,tsx,svg}",
	],
	theme: {
		fontFamily: {
			sans: ["var(--font-inter)", { fontFeatureSettings: '"cv01", "cv03", "cv04", "cv05", "cv06"' }],
			mono: ["var(--font-jetbrains_mono)"],
		},
		extend: {
			screens: {
				xs: "400px",
			},
			backgroundImage: {
				"hero-pattern": "url('../public/grid.svg')",
				"dark-hero-pattern": "url('../public/dark-grid.svg')",
			},
		},
		plugins: [
			require("@tailwindcss/line-clamp"),
		],
	},
};
