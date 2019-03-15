import Vue from 'vue'
import Router from 'vue-router'
import Location from '@/components/location'
import Pad from '@/components/Pad'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Summary from '@/components/mobile/Summary'
import Summary1 from '@/components/mobile/Summary1'
import Summary2 from '@/components/mobile/Summary2'

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
    },
    {
      path: '/m/summary',
      name: 'summary',
      component: Summary
    },
    {
      path: '/m/summary/locations',
      name: 'summary1',
      component: Summary1
    },
    {
      path: '/m/summary/details',
      name: 'summary2',
      component: Summary2
    },
  ]
})
