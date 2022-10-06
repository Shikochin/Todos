import App from './App.vue'
import { createApp } from 'vue'
import './style/main.scss'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')

// eslint-disable-next-line no-console
console.log('😎 Todos! by CHINQ')
