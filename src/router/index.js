import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    routes: [
        {path: '/', component: HomePage},
        {path: '/login', component: LoginPage},

    ]
})

export default router
