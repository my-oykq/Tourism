import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '@/views/home/Home.vue'
import City from '@/views/city/City.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/city',
      name:'City',
      component:City
    }

  ]
})
