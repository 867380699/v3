const plugin = require('tailwindcss/plugin')
const { addDynamicIconSelectors } = require('@iconify/tailwind');
const daisyui = require('daisyui');
const catppuccin = require("@catppuccin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function({ addBase, theme }) {
			addBase({})
    }),
		addDynamicIconSelectors(),
		daisyui,
		catppuccin({
			defaultFlavour: 'latte'
		}), 
	],
}
