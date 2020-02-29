<template>
<!-- 热销推荐 -->
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="(item, index) in weekendList" :key="index">
        <div class="item-img">
          <img class="recommend-img" :src="item.imgUrl" alt="">
        </div>
        <div class="recommend-info">
          <p class="title">{{item.title}}</p>
          <p class="recommend-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      weekendList:Array
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
  .item-img
    overflow hidden
    height 0
    padding-bottom 33.9%
    .recommend-img
      width 100%
  .recommend-info
      padding .14rem .2rem .2rem .2rem
      min-width 0
      .title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .recommend-desc
        line-height .4rem
        color #333
        ellipsis()
        font-size .24rem
      .recommend-btn
        line-height .44rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        margin-top .2rem
        color #ffffff
</style>
