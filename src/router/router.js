// import firebase from '@/firebase'
import store from '@/store/store'
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Animate from '@/views/Animate.vue'
import SignUp from '@/views/SignUp.vue'

Vue.use(Router)

let routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/animate',
    name: 'Animate',
    component: Animate,
    meta: {
      requiresAuth: true
    }
  }
]
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.getLoginUserInfo
  console.log(currentUser)
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/login')
  else if (to.path === '/login' && currentUser) next('/animate')
  else if (!requiresAuth && currentUser) next('/home')
  else next()
})

export default router
