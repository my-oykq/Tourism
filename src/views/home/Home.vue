<template>
  <div id="home">
    <home-header @cityClick="cityClick"></home-header>
    <home-swiper :swiper-list="swiperList"></home-swiper>
    <home-icons :icon-list="iconList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list="weekendList"></home-weekend>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'

// import Scroll from '../../components/common/scroll/Scroll'
import axios from 'axios'
import {mapState} from 'vuex'
  export default {
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
      // Scroll
    },
    data () {
      return {
        // city:'',//城市的数据
        iconList:[],//icon数据
        swiperList:[], //轮播图数据----请求数据用变量保存
        recommendList:[], //热门数据
        weekendList:[],//周末去哪儿数据
        lastCity:''
      }
    },
    mounted () {
      // 调用请求方法
      this.getHomeInfo()
      // 对上一次的city做一次保存
      this.lastCity  = this.city
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo(){
        // // axios返回一个promise，因此可以调用.then
        axios.get('api/index.json?city=' + this.city).then(res =>{
          // console.log(res)
          // 用一个变量保存数据
          const data = res.data
          // 如果后端正确返回并且res有data上
          if(data.ret && data.data){
            let res = data.data
              // 获取城市的数据
            // this.city = res.city
            // 轮播图数据
            this.swiperList = res.swiperList
            // icon数据
            this.iconList = res. iconList
            // 热门数据
            this.recommendList = res.recommendList
            // 周末去哪儿数据
            this.weekendList = res.weekendList

          }
        })
      },
      cityClick(){
        this.$router.push('/city')
      }
    },
    activated () {
      // 当页面重新被激活的时候,与上一次城市不相的时候
       if (this.lastCity !== this.city) {
        //  让上一次城市的值跟着改变
           this.lastCity = this.city
          //  调用ajax
           this.getHomeInfo()
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

