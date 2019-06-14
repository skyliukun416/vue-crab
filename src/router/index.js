import Vue from 'vue'
import Router from 'vue-router'
import Location from '@/components/location'
import Pad from '@/components/Pad'
import Index from '@/components/Index'
import Login from '@/components/Login'
import dashboardFarm from '@/components/dashboardFarm'
import Summary0 from '@/components/mobile/Summary0'
import Summary1 from '@/components/mobile/Summary1'
import Summary2 from '@/components/mobile/Summary2'
import traceHome from '@/components/mobile/trace-home'
import traceDetails from '@/components/mobile/trace-detail'

import qmeHome from '@/components/qme/home'

import qmeBank from '@/components/qme/bank'
import qmeWarehouse from '@/components/qme/warehouse'
import qmeOwner1 from '@/components/qme/owner'
import qmeOwner2 from '@/components/qme/owner2'
import qmeForm from '@/components/qme/form'
import qmePlatform from '@/components/qme/platform'

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
      name: 'summary0',
      component: Summary0
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
    {
      path: '/m/trace',
      name: 'trace-home',
      component: traceHome
    },
    {
      path: '/m/trace/details',
      name: 'trace-details',
      component: traceDetails
    },
    {
      path: '/demo/dashboard/',
      name: 'dashboard-farm',
      component: dashboardFarm
    },
    {
      path: '/qme/home',
      name: 'qme-home',
      component: qmeHome,
      children: [{
      	path: 'bank',
        component: qmeBank
      }, {
      	path: 'owner1',
        component: qmeOwner1
      }, {
      	path: 'owner2',
        component: qmeOwner2
      },{
      	path: 'warehouse',
        component: qmeWarehouse
      },{
      	path: 'form',
        component: qmeForm
      }
      ,{
      	path: 'platform',
        component: qmePlatform
      }]
    },
    
  ]
})
