/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'nevOne': '#606981',
      'btnVtb': '#0084ff',
      'lineVtb': '#d4d7df',
      'white': '#ffffff',
      'border_blue': '#30498f',
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

