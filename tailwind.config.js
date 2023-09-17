/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				startCold: "#3c7cfc",
				endCold: "#59c0e8",
				startHot: "#ff4d4d",
				endHot: "#f9cb28",
			},
			animation: {
				pulseLive: "pulseLive 1.5s infinite",
			},
			keyframes: {
				pulseLive: {
					"0%": { boxShadow: "0 0 0 0 rgba(74, 222, 128,0.5)" },
					"70%": { boxShadow: "0 0 0 10px rgba(74, 222, 128,0)" },
					"100%": { boxShadow: "0 0 0 0 rgba(74, 222, 128,0)" },
				},
			},
		},
	},
	plugins: [],
};
