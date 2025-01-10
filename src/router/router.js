// import firebase from '@/firebase'
import store from '@/store/store'
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Animate from '@/views/Animate.vue'
import SignUp from '@/views/SignUp.vue'
import Laws from '@/views/laws'
import LawDetail from '@/views/laws/Detail.vue'
import AdminLayout from '@/views/admin/AdminLayout'
import NotFound from '@/views/NotFound'
import { ROLE_ADMIN } from '@/config/const'

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
  },
  {
    path: '/laws',
    name: 'Laws',
    component: Laws,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/laws/:id',
    name: 'Law Detail',
    component: LawDetail,
    meta: {
      requiresAuth: true
    }
  },

  //ADMIN route
  {
    path: '/admin',
    component: AdminLayout,
    meta: {
      requiresAuth: true,
      roles: [ROLE_ADMIN]
    },
    children: [
      {
        path: '',
        redirect: 'users'
      },
      {
        path: 'users',
        name: 'ManageUsers',
        component: () => import('@/views/admin/ManageUsers.vue'),
        meta: {
          requiresAuth: true,
          roles: [ROLE_ADMIN]
        }
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import('@/views/admin/Statistics.vue'),
        meta: {
          requiresAuth: true,
          roles: [ROLE_ADMIN]
        }
      },
      {
        path: 'law-documents',
        name: 'LawDocuments',
        component: () => import('@/views/admin/LawDocuments.vue'),
        meta: {
          requiresAuth: true,
          roles: [ROLE_ADMIN]
        }
      }
    ]
  },
  {
    path: '/404',
    name: 'Not Found',
    component: NotFound
  },
  {
    path: '/payment-result',
    name: 'payment-result',
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      const previousUrl = localStorage.getItem('previousUrl')
      if (previousUrl) {
        localStorage.removeItem('previousUrl')
        next({ path: previousUrl })
      } else {
        next()
      }
    }
  }
]
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.getLoginUserInfo
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const requiredRoles = to.meta.roles || []

  // Kiểm tra yêu cầu đăng nhập
  if (requiresAuth && !currentUser) {
    next('/login') // Chưa đăng nhập, chuyển đến trang login
  } else if (to.path === '/login' && currentUser) {
    next('/animate') // Nếu đã đăng nhập, chuyển đến trang Animate
  } else if (requiresAuth && requiredRoles.length > 0) {
    // Kiểm tra quyền truy cập cho role admin
    const userRoles = currentUser.roles || []
    const hasRole = requiredRoles.some((role) => userRoles.includes(role))
    if (!hasRole) {
      next({ name: 'Not Found' })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to) => {
  document.title = to.name || 'AI Assistant'
})
export default router
