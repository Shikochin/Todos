import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './style/main.scss'

export const createApp = ViteSSG(
    App,
    ({ app }) => {
        const pinia = createPinia()
        app.use(pinia)
    }
)

// eslint-disable-next-line no-console
console.log('😎 Todos! by CHINQ')
