/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            white: '#ffffff',
            violet: {
                light: 'hsl(263,55%,70%)',
                DEFAULT: 'hsl(263,55%,52%)',
            },
            gray: {
                light: 'hsl(217,19%,70%)',
                DEFAULT: 'hsl(217,19%,35%)',
            },
            blue: {
                light: 'hsl(219,29%,70%)',
                DEFAULT: 'hsl(219,29%,14%)',
            },
        },
    },
    plugins: [],
};
