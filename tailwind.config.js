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
    backgroundImage: {
      "e-gradient": "linear-gradient(90deg, #BE1D90 0%, #6AD5CB 100%)",
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
    boxShadow: {
      custom: "2px 4px 5px 0px rgba(0, 0, 0, 0.25)",
    },
  },
};
export const plugins = [];
