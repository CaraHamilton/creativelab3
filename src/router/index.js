import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleTenant from '../views/SingleTenant.vue'
import AllTenants from '../views/AllTenants.vue'
import CreateNew from '../views/CreateNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SingleTenant',
    name: 'SingleTenant',
    component: SingleTenant
  },
  {
    path: '/CreateNew',
    name: 'CreateNew',
    component: CreateNew
  },
  {
    path: '/AllTenants',
    name: 'AllTenants',
    component: AllTenants
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
