<template>
  <div class="city-search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"CitySearch"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~styles/varibles.styl'
 .city-search
   height .72rem
   background $bgColor
   padding 0 .1rem
   .search-input
     width 100%
     height .62rem
     line-height .62rem
     text-align center
     border-radius .06rem
     color #666
     padding 0 .1rem
     box-sizing border-box
</style>
