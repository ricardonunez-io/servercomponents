/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
		"./mdx-components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
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
			require("@tailwindcss/typography"),
		],
	},
};
