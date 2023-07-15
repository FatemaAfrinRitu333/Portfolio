/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c91f16",

          secondary: "#00e275",

          accent: "#d9ccff",

          neutral: "#1b1820",

          "base-100": "#000",

          info: "#637ad4",

          success: "#2bdec9",

          warning: "#e19614",

          error: "#ec4649",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
