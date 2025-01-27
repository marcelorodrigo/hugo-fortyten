const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './layouts/**/*.html',
        './content/**/*.md',
        './assets/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
            }
        },
    },
    plugins: [],
}