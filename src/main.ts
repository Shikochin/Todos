import App from './App.vue'
import { createApp } from 'vue'
import './styles/main.scss'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')

// eslint-disable-next-line no-console
console.log('😎 Todos! by CQBerry')
