/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'todo': 'repeat(auto-fit, minmax(400px, 1fr))'
            },
            colors: {
                todoLight: '#F5F5A0',
                todoGray: '#737A7A'
            },
            fontFamily: {
                'mono': ['JetBrains Mono', 'Cascadia Code', 'Fira Code', 'monospace']
            }
        },
    },
    plugins: [],
}