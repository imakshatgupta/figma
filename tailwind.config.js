/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ffffff: "#fff",
        gray: {
          "100": "#171e27",
          "200": "#020305",
          "300": "rgba(23, 30, 39, 0.5)",
        },
        a9c2cb: "#a9c2cb",
        dimgray: "#5c5050",
        d0f12: "#0d0f12",
        slategray: "rgba(99, 117, 124, 0.8)",
      },
      spacing: {},
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "amazonic-personal-use": "'AMAZONIC PERSONAL USE'",
      },
      borderRadius: {
        xl: "20px",
        "21xl": "40px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "45xl": "64px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
