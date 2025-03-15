/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./specialPage/**/*.{ts,tsx}", // Target only specific pages
      "./components/special/**/*.{ts,tsx}", // Target only certain components
    ],
    theme: {
      extend: {
        colors: {
          orangered: "#FF4500",
          neonBlue: "#1E90FF",
          electricGreen: "#00FF00",
        },
        borderRadius: {
          xl: "1.5rem",
          "2xl": "2rem",
        },
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          bounceSlow: {
            "0%, 100%": { transform: "translateY(-10%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" },
            "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.5s ease-in-out",
          bounceSlow: "bounceSlow 2s infinite",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  };
  