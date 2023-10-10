import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import Router from './route/index'

const pinia = createPinia()

createApp(App).use(pinia).use(Router).mount('#app')
