import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './assets/main.scss'

export const createApp = ViteSSG(App)

console.log('😎 Todos! by CHINQ')