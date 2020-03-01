<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot-cities="hotCities"
      :letter="letter"></city-list>
    <city-tab :cities="cities" @change="change"></city-tab>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'

import CityHeader from './components/CityHeader'
import CitySearch from './components//CitySearch'
import CityList from './components/CityList'
import CityTab from './components/CityTab'
  export default {
    name:"City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityTab
    },
    data () {
      return {
        letter:'',//父组件传给子组件的参数
        cities:{}, //存放右边 A BCD的数据
        hotCities:[], // 热门城市的数据
      }
    },
    mounted () {
      this.getCityInfo()
    },
    methods: {
      getCityInfo(){
        // axios的返回值是一个promise ，可以用.then来拿数据
        axios.get('/api/city.json').then(res =>{
          console.log(res)
          const data = res.data
          if(data.ret && data.data){
            let res = data.data
            // 拿到数据先保存数据，当函数一旦被调用内部的数据就会销毁，如果再次调用就会重新创建数据
            this.cities = res.cities
            this.hotCities = res.hotCities
          }
        })
      },

      // 事件处理,接收子组件自定义事件传递过来的参数，形参名字可以任意取，但是要与实参的个数保持一致
      change(letter){
        // 把改变的letter赋值给新的letter
        this.letter = letter
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
