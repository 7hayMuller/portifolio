/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/pages/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    animation: {
      spin: "spin 100s linear infinite",
    },
    colors: {
      "yellow-translucent": "rgba(255, 255, 0, 0.1)",
    },
  },
};
export const plugins = [];
