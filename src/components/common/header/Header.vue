<template>
<!-- 导航栏封装 -->
  <di id="header">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </di>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"Header"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
