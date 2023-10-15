/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        '60lines': "url('/images/lines.png')",
        'fibres': "url('/images/translucent-fibres.png')",
        'twill': "url('/images/black-twill.png')",
        'axiom': "url('/images/axiom-pattern.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["wireframe", "business", "cyberpunk", "luxury"]
  }
}
