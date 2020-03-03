import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '@/views/home/Home.vue'
import City from '@/views/city/City.vue'
import Detail from '@/views/detail/Detail.vue'
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
    },
    {
      path:'/detail/:id',
      name:Detail,
      component:Detail
    }

  ]
})
