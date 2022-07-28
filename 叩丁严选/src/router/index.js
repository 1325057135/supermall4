import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
    
  },
  {
    path:'/home',
    component:()=>import('../views/Home.vue')
  },
  {
    path:'/detail/:id',
    component:()=>import('../views/Detail.vue')
  },
  {
    path:'/me',
    component:()=>import('../views/me.vue')
  },
  {
    path:'/order',
    component:()=>import('../views/order.vue')
  },
  {
    path:'/free',
    component:()=>import('../views/free.vue')
  },
  {
    path:'/goods',
    component:()=>import('../views/Goods.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
