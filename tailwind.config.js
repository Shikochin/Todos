/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.vue",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                todo: 'repeat(auto-fit, minmax(400px, 1fr))'
            },
            colors: {
                'todo-light': '#F1F5F9',
                'todo-dark': '#737A7A'
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'Cascadia Code', 'Fira Code', 'monospace']
            }
        },
    }
}