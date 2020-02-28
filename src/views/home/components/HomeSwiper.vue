<template>
<!-- 轮播图组件 -->
    <div class="wrapper">
        <swiper :options="swiperOption">
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
    data () {
      return {
        swiperOption:{
          // 小圆点
          pagination: '.swiper-pagination',
          // 循环轮播
          loop:true
        },
        swiperList:[
          {
            id:'001',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
          },
          {
            id:'002',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// 修改第三方插件的样式
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
