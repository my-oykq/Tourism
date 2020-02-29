<template>
<!-- 轮播图组件 -->
    <div class="wrapper">
      <!-- 当图片 > 1时就开始自动轮播 -->
        <swiper :options="swiperOption" v-if="showSwiper" >
          <!-- slides -->
          <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <img class="swiper-img" :src="item.imgUrl" alt="">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>

        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // name:"Swiper",
    // 接收父组件传递过来的参数
    props:{
      swiperList:Array
    },
    data () {
      return {
        swiperOption:{
          // 小圆点
          pagination: '.swiper-pagination',
          // 循环轮播
          loop:true,
          observer:true,
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          // 设置autoplay的时间
          autoplay: 3000,

        },

      }
    },
    methods: {

    },
    computed: {
      showSwiper(){
        return this.swiperList.length
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// 修改第三方插件的样式
  .wrapper >>> .swiper-pagination-bullet-active
    background: #00bcd4
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
