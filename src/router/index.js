import Vue from 'vue'
import Router from 'vue-router'
import Location from '@/components/location'
import Pad from '@/components/Pad'
import Index from '@/components/Index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/pad',
      name: 'pad',
      component: Pad
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
