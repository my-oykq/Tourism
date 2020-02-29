<template>
  <div id="icons">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) in pages" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
              <div class="icon-img">
                <img :src="item.imageUrl" alt="">
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
    data () {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          loop:true //循环轮播
        },
        iconList:[
          {id:'001',imageUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',desc:'酒店'},
          {id:'002',imageUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'景点门票'},
          {id:'003',imageUrl:'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',desc:'攻略'},
          {id:'004',imageUrl:'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',desc:'自由行'},
          {id:'005',imageUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',desc:'度假'},
          {id:'006',imageUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',desc:'度假'},
          {id:'007',imageUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',desc:'度假'},
          {id:'008',imageUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',desc:'度假'},
          {id:'009',imageUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',desc:'度假'},
        ]
      }
    },
    computed: {
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
