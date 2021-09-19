import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Studies from '../views/Studies.vue'
import Certificates from '../views/Certificates.vue'
import Portfolio from '../views/Portfolio.vue'

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
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }

]

const router = new VueRouter({
  routes
})

export default router
