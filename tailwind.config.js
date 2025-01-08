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
    },
    plugins: [],
};
