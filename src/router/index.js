import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/public/home')
    },
    {
      path: '/post/:slug',
      name: 'OnePost',
      component: () => import('../components/public/posts/OnePost')
    },
    {
      path: '/register',
      component: () => import('../components/auth/register')
    },
    {
      path: '/login',
      component: () => import('../components/auth/login')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../components/profile'),
      meta: {
        auth: true
      }
    },
    {
      path: '*',
      component: () => import('@/components/public/notfound')
    }
  ],
  mode: 'history',

})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (localStorage.getItem('isAuth') === "true") {
      next()
      return
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
