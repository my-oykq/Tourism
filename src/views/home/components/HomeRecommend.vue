<template>
<!-- 热销推荐 -->
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="(item, index) in recommendList" :key="index">
        <img class="recommend-img" :src="item.imgUrl" alt="">
        <div class="recommend-info">
          <p class="title">{{item.title}}</p>
          <p class="recommend-desc">{{item.desc}}</p>
          <button class="recommend-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      recommendList:Array
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
     margin-top .2rem
     line-height .8rem
     background #eeeeee
     text-indent .2rem
  .item
    display flex
    height 1.9rem
    margin-top .2rem
    border-bottom 2px solid #eee
    .recommend-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .recommend-info
       flex 1
       margin-top .2rem
       min-width 0

       .title
         line-height .54rem
         font-size .32rem
         ellipsis()
       .recommend-desc
         line-height .4rem
         color #ccc
         ellipsis()
       .recommend-btn
         line-height .44rem
         background #ff9300
         padding 0 .1rem
         border-radius .06rem
         margin-top .2rem
         color #ffffff
</style>
