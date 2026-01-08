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
                'sans': ['Jost', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'brand-accent': {
                    50: '#fef3c7',
                    100: '#fde68a',
                    200: '#fcd34d',
                    300: '#fca5a5',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
