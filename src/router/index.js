import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { getCurrentUser } from 'vuefire';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import("@/views/LogoutView.vue")
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const currentUser = await getCurrentUser();
  !currentUser && to.name != "login" ? next({ name: "login" }) : next();
});

export default router
