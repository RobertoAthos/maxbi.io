import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"dark-primary": "#212227",
				primary: "#2764F5",
				"primary-gradient": "linear-gradient(90deg, #6DACE7 0%, #2764F5 100%)",
			},
		},
	},
	plugins: [],
};
export default config;
