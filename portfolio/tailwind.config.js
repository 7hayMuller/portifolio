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
      blurColors: {
        1: "#ff9a9e",
        2: "#fad0c4",
        3: "#fbc2eb",
        4: "#a18cd1",
        5: "#fbc2eb",
        6: "#84fab0",
        7: "#8fd3f4",
      },
    },
  },
};
export const plugins = [];
