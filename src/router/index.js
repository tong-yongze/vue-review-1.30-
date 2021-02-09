import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/article.vue')
  },
  {
    path: '/classandstyle',
    name: 'ClassAndStyle',
    component:() => import('../views/classandstyle.vue')
  },
  {
    path: '/form',
    name: 'FormCom',
    component:() => import('../views/form.vue')
  },
  {
    path: '/com0206',
    name: 'Com0206',
    component:() => import('../views/com0206.vue')
  },
  {
    path: '/slot0206',
    name: 'Slot0206',
    component:() => import('../views/slot0206.vue')
  }
  ,
  {
    path: '/dynCom0209',
    name: 'DynCom0209',
    component:() => import('../views/dynCom0209.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
