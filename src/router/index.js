import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue'
import OverMij from '../views/AboutMeView.vue'
import Stage from '../views/StageView.vue'
import Projecten from '../views/ProjectenView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [


    { path: '/', name: 'home', component: Home, meta: { title: 'Home' } },
    { path: '/over-mij', name: 'over-mij', component: OverMij, meta: { title: 'Over mij' } },
    { path: '/stage', name: 'stage', component: Stage, meta: { title: 'Stage' } },
    { path: '/projecten', name: 'projecten', component: Projecten, meta: { title: 'Projecten' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Contact' } },
    { path: '/projecten/:slug', name: 'project-detail', component: ProjectDetailView }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) document.title = `${to.meta.title}`
})

export default router;
