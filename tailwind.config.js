const { green, white } = require("color-name");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1240px",
      },
    },
    colors: {
      whitec2: "#C7D2CE",
      green00: "#00AB4D",
      green10: "#104837",
      green54: "#547068",
      green39: "#399D4D",
      white: "#ffff",
    },
    extend: {
      screens: {
        xxs: "576px",
        xxxs: "415px",
        934: "939.98px",
        992: "991.98px",
        1200: "1200px",
      },
      spacing: {
        29: "29px",
      },
      fontFamily: {
        ib: ["ib", "sans-serif"],
        ir: ["ir", "sans-serif"],
        im: ["im", "sans-serif"],
      },
      borderRadius: {
        34: "34px",
        24: "24px",
        8: "8px",
      },
      fontSize: {
        h3: [
          "42px",
          {
            lineHeight: "140%",
            letterSpacing: "0px",
          },
        ],
        body: [
          "16px",
          {
            letterSpacing: "0",
            lineHeight: "140%",
          },
        ],
        label: [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
          },
        ],
      },
    },
  },
  plugins: [],
};
