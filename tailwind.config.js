/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],

  theme: {
    extend: {
      keyframes: {
        bounce: {
          "20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-20px)" },
          "70%": { transform: "translateY(-15px)" },
          "90%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        bounce: "bounce 1s linear",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        zoomIn: "zoomIn 1s ease-in-out",
      },

      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        md: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        lg: "6px 6px 12px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        sm: "480px",
        xs: "300px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        big: "48rem",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-md": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        },
        ".text-shadow-lg": {
          textShadow: "6px 6px 12px rgba(0, 0, 0, 0.3)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
