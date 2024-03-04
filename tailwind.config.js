const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            "rotate-scale-up": "rotate-scale-up 0.7s linear   both"
        },
        keyframes: {
            "rotate-scale-up": {
                "0%": {
                    transform: "scale(1) rotateZ(0)"
                },
                "50%": {
                    transform: "scale(2) rotateZ(180deg)"
                },
                to: {
                    transform: "scale(1) rotateZ(360deg)"
                }
            }
        },
      backgroundImage: {
        'hero-pattern': "url('/blackbg.jpg')",
        'fresh-pattern': "url('/fresh.jpg')",
        'italian-pattern': "url('/italian.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        primary: "#fb8c00",
        secondary: "#f13a01",
        warning: "#F54180",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        lemon: ["var(--font-lemon)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
