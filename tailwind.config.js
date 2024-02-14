/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
		"./pages/**/*.html",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgHome':'url(../assets/bgbg.jpg)'
      },
      fontFamily: {
        mainFont: ['mainFont']
      },
      colors: {
        'tableHeader':'rgb(117, 99, 102)',
        'buttonColor':'rgb(161,127,122)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

