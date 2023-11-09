import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import PaymentView from '../views/PaymentView.vue'
import FavoriteView from '../views/FavoriteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem('access_token')
  if (to.name === 'login' && access_token) {
    next({ name: 'home' })
  } 
  else if (to.name === 'register' && access_token) {
    next({ name: 'home' })
  }
  else if (to.name === 'home' && !access_token) {
    next({ name: 'login' })
  }
  else if (to.name === 'payment' && !access_token) {
    next({ name: 'login' })
  }
  else if (to.name === 'favorite' && !access_token) {
    next({ name: 'login' })
  }
  else next()
})

export default router
