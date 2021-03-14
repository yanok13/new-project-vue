import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home";
import blog from "@/components/Menu/blog";

const routes = [
    { path: '/', component: Home },
    { path: '/blog', component: blog },
]

export default createRouter({
    history: createWebHistory(),
    routes
})