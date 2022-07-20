const colors = require('./node_modules/tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

// Hacky way to include all colors
const colorSaveList = [];
const extendeColors = {};

for (const key in colors) {
  extendeColors[key] = colors[key];

  [100, 200, 300, 400, 500, 600, 700, 800, 900].forEach(colorValue => {
   

    if (!['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'].includes(key))
    {
      colorSaveList.push(`text-${key}-${colorValue}`);
      colorSaveList.push(`bg-${key}-${colorValue}`);
    }
     
  });
}


extendeColors['primary-dark'] = '#293039';
extendeColors['secondary-dark'] = '#15181c';

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  safelist: colorSaveList,
  theme: {
   extend: {
      colors: extendeColors,
      screens: {
        'tv': '50cm'
      }
   }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]

}