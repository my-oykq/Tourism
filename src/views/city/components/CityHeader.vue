<template>
  <div class="header">
    城市选择
    <span class="iconfont back-icon" @click="backClick">&#xe624;</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    methods: {
      backClick(){
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~styles/varibles.styl'
  .header
    position relative
    background $bgColor
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color #fff
    font-size .32rem
    .back-icon
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .32rem
</style>
