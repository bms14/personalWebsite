import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Studies from '../views/Studies.vue'

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
    component: About
  },
  {
    path: '/studies',
    name: 'Studies',
    component: Studies
  }/* ,
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates
  } */
]

const router = new VueRouter({
  routes
})

export default router
