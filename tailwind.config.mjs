/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary":"#04246e",
				"secondary": "#ffcf1b",
				"terceary": "#e81d20",
				"light": "#fafafa",
				"blueLight": "#eff2ff",
			},
			fontFamily: {
                inter: ['Inter Variable', 'sans-serif'],
            },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
