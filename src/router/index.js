import {createRouter,createWebHistory} from "vue-router"
import HomeView from "../View/HomeView.vue"
import KontaktiView from "../View/KontaktiView.vue"
import OMeniView from "../View/OMeniView.vue"
import SkolovanjeView from "../View/SkolovanjeView.vue"

const router = createRouter ({
    history: createWebHistory (import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path:"/kontakti",
            name:"kontakti",
            component: KontaktiView
        },
        {   
            path:"/oMeni",
            name:"O Meni",
            component: OMeniView
        
        },
        {
            path:"/skolovanje",
            name:"skolovanje",
            component: SkolovanjeView
        }
        
        
    ]
})

export default router