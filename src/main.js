
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import Header from './components/common/header/Header.vue'

Vue.config.productionTip = false
// 移动端三百毫秒延迟
fastClick.attach(document.body)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 注册全局组件---公共组件
Vue.component('Header', Header)
