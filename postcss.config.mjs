const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mui/material/**/*.{js,mjs}",
  ],
  plugins: {
    "@tailwindcss/postcss": {},
  },

  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        text: "var(--text-color)",
      },
      width: {
        button: "var(--button-width)",
        textfield: "var(--textfield-width)",
      },
      height: {
        button: "var(--button-height)",
        textfield: "var(--textfield-height)",
      },
      padding: {
        button: "var(--button-padding)",
      },
    },
  },
};
export default config;
