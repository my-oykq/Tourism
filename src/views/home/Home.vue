<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
  export default {
    components: {
      HomeHeader,
      HomeSwiper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home
    font-size 30px
</style>

