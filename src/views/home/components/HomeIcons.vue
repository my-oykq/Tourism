<template>
  <div id="icons">
    <swiper :options="swiperOption" v-if="showIcon">
        <swiper-slide v-for="(page, index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
              <img :src="item.imgUrl" alt="">
            </div>
            <p class="icon-content">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      iconList:Array
    },
    data () {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          loop:true //循环轮播
        },

      }
    },
    computed: {
      //判断icon数据初始化显示第一页数据
      showIcon(){
        return this.iconList.length
      },
      // 通过遍历，一维数组生成二维数组
      pages(){
        const pages = []
        let smallArr = []
        this.iconList.forEach(icon =>{
          if(smallArr.length === 0){
            pages.push(smallArr)
          }
          smallArr.push(icon)
          if(smallArr.length === 8){
            smallArr = []
          }
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  #icons >>> .swiper-pagination-bullet-active
    background #00bcd4
  #icons
    height 0
    // 把子元素溢出部分截取
    overflow hidden
    margin-top .1rem
    padding-bottom 50%
    .icon
      float left
      width 25%
      position relative
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
      .icon-img>img
      // 图片居中
       display block
       margin 0 auto
       height 100%
      .icon-content
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        ellipsis()
        color $darkTextColor
        line-height .44rem
        text-align center
</style>
