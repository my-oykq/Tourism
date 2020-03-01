<template>
  <ul class="tab">
    <li class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      cities:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~styles/varibles.styl'
  .tab
    display flex
    // 垂直居中
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
       text-align center
       line-height .4rem
       color $bgColor
</style>
