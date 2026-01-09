module.exports = {
    content: [
        './layouts/**/*.html',
        './content/**/*.md',
        './assets/**/*.js',
    ],
    safelist: [
        'sm:grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3',
    ],
    theme: {
        extend: {
            colors: {
                'brand-accent': {
                    50: '#fef3c7',
                    100: '#fde68a',
                    200: '#fcd34d',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                },
            }
        },
    },
}
