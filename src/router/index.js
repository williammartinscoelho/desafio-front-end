import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/Registration'
import BrazilInfo from '../views/BrazilInfo'
import RegionalBloc from '../views/RegionalBloc'
import SearchCountry from '../views/SearchCountry'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/brazil',
    name: 'BrazilInfo',
    component: BrazilInfo
  },
  {
    path: '/regional-bloc',
    name: 'RegionalBloc',
    component: RegionalBloc
  },
  {
    path: '/search-country',
    name: 'SearchCountry',
    component: SearchCountry
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
