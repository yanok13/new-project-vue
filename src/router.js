import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home"
import FAQ from "@/components/PagesHeader/FAQ"
import Regulations from "@/components/PagesHeader/Regulations"


const routes = [
    { path: '/', component: Home },
    { path: '/faq', component: FAQ },
    { path: '/regulations', component: Regulations },
]

export default createRouter({
    history: createWebHistory(),
    routes
})