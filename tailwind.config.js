module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    darkMode: false,
    theme: {
        container: {
            center: true,
            padding: {
                sm: '0.5rem',
                md: '2rem',
                lg: '2rem',
                xl: '5rem',
            },
        },
        screens: {
            'sm': '360px',
            'md': '768px',
            'lg': '1280px',
            'xl': '1920px',
        }
    },
    variants: {},
    plugins: [],
}