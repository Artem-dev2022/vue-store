import {createRouter, createWebHashHistory} from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import CartPage from '../pages/CartPage.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/cart', component: CartPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router