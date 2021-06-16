import Vue from 'vue'
import Router from 'vue-router'
import create from './views/Create.vue'
import listParts from './views/List.vue'
import trace from './views/Trace.vue'
import qr from './views/QR.vue'
//import queryAll from './invoke.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
 
    {
      path: '/:orgid?',
      name: 'listParts',
      component: listParts,
      meta: {reload:true,},
      props: (route) => ({ orgid: route.params.orgid})
    },
    {
      path: '/trace/:orgid/:ownerorgid/:truid',
      name: 'Trace',
      component: trace,
      meta: {reload:true,},
      props: (route) => ({ orgid: route.params.orgid, ownerorgid: route.params.ownerorgid, truid: route.params.truid })
    },
    {
     path: '/qr/:orgid/:ownerorgid/:truid',
      name: 'QR',
      component: qr,
      props: (route) => ({ orgid: route.params.orgid, ownerorgid: route.params.ownerorgid, truid: route.params.truid })
    },
    {
      path: '/create',
      name: 'create',
      component: create
    }

  ]
})
