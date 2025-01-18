/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      keyframes: {
        bgColorChange: {
          '0%, 100%': { backgroundColor: '#00bf63' },  // light blue
          '25%': { backgroundColor: '#ffde59' },        // light pink
          '50%': { backgroundColor: '#004aad' },        // light beige
          '75%': { backgroundColor: '#ff3131' },        // light green
        },
      },
      animation: {
        'bg-color-change': 'bgColorChange 10s infinite',
      },
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: { 
//     fontFamily: {
//       inter: ["Inter", "sans-serif"],
//       "edu-sa": ["Edu SA Beginner", "cursive"],
//       mono: ["Roboto Mono", "monospace"],
//     },
//     extend: {
//   },
//   },
//   plugins: [],
// }

