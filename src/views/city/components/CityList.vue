<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="city-area">
        <!-- 您的位置 -->
          <div class="title border-topbottom">您的位置</div>
          <div class="button-list">
            <div class="button-wrapper">
                <div class="button">{{this.city}}</div>
            </div>
          </div>
          <div class="city-area">
            <!-- 热门城市 -->
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
              <div class="button-wrapper"
                v-for="item in hotCities"
                :key="item.id"
                 @click="handleClick(item.name)">
                <div class="button">{{item.name}}</div>
              </div>
            </div>
          </div>
          <!-- ref拿到对应的元素，因为是在City组件点击字母 key切换对应的文字，因此，ref绑定的是key， -->
          <div class="city-area"
              v-for="(item, key) in cities"
              :key="key"
              :ref="key">
            <!-- A -->
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
              <div class="item"
               v-for="inner in item"
                :key="inner.id"
                @click="handleClick(inner.name)">{{inner.name}}</div>
            </div>
          </div>
      </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
  export default {
    props:{
      cities:Object,
      hotCities:Array,
      letter:String
    },
    computed: {
      ...mapState(['city']),
      // ...mapMutations(['CITY'])
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    // 监听City组件点击字母时，List组件切换到对应字母的文字--就是说监听letter
    watch: {
      letter () {
        // 1.如果letter一旦发生改变的话
        if(this.letter){
          // 3.拿到对应的key，也就是改变的letter[0]拿到数组第一个div元素
          const element = this.$refs[this.letter][0]
          // 2.调用scroll中scrollToElement
          this.scroll.scrollToElement(element)
        }

      }
    },
    methods: {
      handleClick(city){
        // 通过触发actions，把参数传过去，通过actions提交到mutations来修改city
        this.$store.dispatch('changeCity',city)
        // this.changeCity(city)
        // 页面跳转
        this.$router.push('/')
      },

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
