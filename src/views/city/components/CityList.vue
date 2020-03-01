<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="city-area">
        <!-- 您的位置 -->
          <div class="title border-topbottom">您的位置</div>
          <div class="button-list">
            <div class="button-wrapper">
                <div class="button">北京</div>
            </div>
          </div>
          <div class="city-area">
            <!-- 热门城市 -->
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
              <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
                <div class="button">{{item.name}}</div>
              </div>
            </div>
          </div>
          <div class="city-area" v-for="(item, key) in cities" :key="key">
            <!-- A -->
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
              <div class="item" v-for="inner in item" :key="inner.id">{{inner.name}}</div>
            </div>
          </div>
      </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
  export default {
    props:{
      cities:Object,
      hotCities:Array
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .city-list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eeeeee
      padding-left .26rem
      color #666
      font-size .26rem
    .button-list
      display flex
      padding .1rem .6rem .1rem .1rem
      flex-wrap wrap
      .button-wrapper
        width 33.33%
        .button
            text-align center
            border .02rem solid #ccc
            margin .1rem
            border-radius .06rem
            padding .1rem 0
    .item-list
      color #666
      line-height .76rem
      padding-left .2rem

      .item
        border-bottom .02rem solid #eee
</style>
