import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/public/home')
    },
    {
      path: '/:handle/post/:id',
      name: 'OnePost',
      component: () => import('@/components/public/posts/OnePost')
    },
    {
      path: '/:handle',
      name: 'profile',
      component: () => import('@/components/profile')
    },
    {
      path: '*',
      component: () => import('@/components/public/notfound')
    }
  ],
  mode: 'history'
})
