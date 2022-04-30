import Vue from 'vue'
import VueRouter from 'vue-router'
import TheSidebar from '../components/TheSidebar'

Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/about',
        name: 'About',
        components: TheSidebar
    }
]

const router = new VueRouter({
    routes
})
export default router