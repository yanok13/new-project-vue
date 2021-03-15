import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home"
import FAQ from "@/components/PagesHeader/FAQ"
import Regulations from "@/components/PagesHeader/Regulations"
import Mission from "@/components/PagesFooter/Mission"
import TermsOfUse from "@/components/PagesFooter/TermsOfUse"
import PersonalPolicy from "@/components/PagesFooter/PersonalPolicy"


const routes = [
    { path: '/', component: Home },
    { path: '/faq', component: FAQ },
    { path: '/regulations', component: Regulations },
    { path: '/mission', component: Mission },
    { path: '/terms-use', component: TermsOfUse },
    { path: '/personal-policy', component: PersonalPolicy },
]

export default createRouter({
    history: createWebHistory(),
    routes
})