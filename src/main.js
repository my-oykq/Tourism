
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'
// 轮播图全局引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import Header from './components/common/header/Header.vue'
import Scroll from './components/common/scroll/Scroll.vue'

Vue.config.productionTip = false
// 声明使用轮播图
Vue.use(VueAwesomeSwiper)
// 移动端三百毫秒延迟
fastClick.attach(document.body)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 注册全局组件---公共组件
Vue.component('Header', Header)
Vue.component('Scroll', Scroll)
