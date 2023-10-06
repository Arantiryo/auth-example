/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["10px", "12.19px"],
      sm: ["12px", "14.63px"],
      base: ["14px", "17.07px"],
      lg: ["24px", "29.26px"],
      xl: ["26px", "31.69px"],
    },
    extend: {
      colors: {
        white: "#fff",
        "dark-blue": "#1E1E2E",
        blue: "#4D6AE4",
        "light-blue": "#86BFEB",
        gray: "rgba(30, 30, 46, 0.5)",
        "light-gray": "#F3F5F5",
        yellow: "#FFC543",
      },
    },
  },
  plugins: [],
};
