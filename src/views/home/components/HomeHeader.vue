<template>
<!-- header组件后期封装优化 -->
  <div class="header">
     <div class="header-left">
       <span class="iconfont back-icon">&#xe624;</span>
     </div>
     <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题</div>
     <div class="header-right">
       {{this.city}}
       <span class="iconfont arrow-icon" @click="cityClick">&#xe64a;</span>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"HomeHeader",
    // 子组件接收从父组件传递过来的数据
    props:{
      city:String
    },
    methods: {
      cityClick(){
        this.$emit('cityClick')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~styles/varibles.styl'
  .header
    background $bgColor
    height .86rem
    display flex
    line-height .86rem
    color #fff
    z-index 99
    position relative
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .34rem
        margin-left .16rem
    .header-input
      flex 1
      height .64rem
      padding-left .2rem
      line-height .64rem
      margin-top .12rem
      background-color #ffffff
      margin-left .12rem
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        font-size .24rem
</style>
