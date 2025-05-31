import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/views/pdf/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
        "./node_modules/flowbite/**/*.js"

    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                greenColor:"#4ea86e",
                 grayColor:"#f5f6fa",
                 blueColor:"#004f99",
                 primaryColor:"#364574",
                 bluelight:"#879bc7",
                 emeraldLight:"#0ab39c",
                 emeraldDark:"#099885",
                 blueLight:"#299cdb",
                 blueDark:"#2385ba",
                 slateColor:"#f3f6f9",
                 grayFonts:"#878a99",
                 whiteLights:"rgba(255,255,255,.3)",


            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
              }

        },

    },

    plugins: [
        require('flowbite/plugin')
    ]
};



