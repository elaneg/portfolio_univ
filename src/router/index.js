import {createRouter, createWebHistory} from 'vue-router'
import Projets from "@/components/Projets.vue";
import ProjetDetail from "@/components/ProjetDetail.vue";
import Accueil from "@/components/Accueil.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: Accueil
        },
        {
            path: '/projets',
            name: 'Projets',
            component: Projets
        },
        {
            path: '/projets/:id',
            name: 'ProjetDetail',
            component: ProjetDetail
        },
    ]
})

export default router
