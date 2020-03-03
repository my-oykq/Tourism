<template>
  <div>
      <div class="city-search">
        <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword">
      </div>
      <!-- keyword有值时把城市隐藏，没有值时显示城市列表 -->
      <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li class="search-item border-bottom"
            v-for="item in list"
             :key="item.id"
             @click="handleClick(item.name)">{{item.name}}</li>
          <!-- 当list的长度为0时才会出现 -->
           <li class="search-item border-bottom" v-show="hasNoList">没有找到匹配数据</li>
        </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
  export default {
    name:"CitySearch",
    props:{
      cities:Object
    },
    data () {
      return {
        keyword:'', //双向绑定数据
        list:[],//关键词城市的拼音
        timer:null
      }
    },
    computed: {
      hasNoList(){
        return !this.list.length
      }
    },
    watch: {
      // 监听keyword
      keyword(){
        // 1.代码优化，使用节流，减少keyword的触发,如果timer存在，
        if(this.timer){
          // 清空定时器
          clearTimeout(this.timer)
        } //2.否则,setTimeout在规定的时间内执行某段代码
        // 3.如果keyword没有，就清空result
        if(!this.keyword){
          const result = []
          return
        }

        this.timer = setTimeout(() =>{
          // 因为cities是对象，无法拿到字母下标，定义一个空的数组，通过遍历把遍历拿到的i添加到新的数组
          const result = []
          // 遍历拿到第一层数据：ABCDEFGHIJKLMNOPQRSTUVWYZ
          for (let i in this.cities){
            //拿到第一层数据再次遍历拿到里边的数据传入一个值，相当于item
            this.cities[i].forEach((value)=>{
              //通过这个值查找在输入拼音的时候没有就等于 -1,说明没有找到，indexOf === -1  >-1说明查找到
              if(value.spell.indexOf(this.keyword)> -1 || value.name.indexOf(this.keyword) >-1){
                // 并且添加到result中
                result.push(value)
              }
            })
          }
          this.list = result
        },100)
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search)
    },
    methods: {
      handleClick(city){
        // 通过触发actions，把参数传过去，通过actions提交到mutations来修改city
        // this.$store.dispatch('changeCity',city)

        // 通过触发actions，把参数传过去，通过actions提交到mutations来修改city
          this.$store.dispatch('changeCity',city)
          // this.changeCity(city)
          // 页面跳转
          this.$router.push('/')
      },
        //  ...mapMutations(['changeCity'])
      }
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
  .search-content
     overflow hidden
     position absolute
     top 1.58rem
     left 0
     right 0
     bottom 0
     background #eeeeee
     z-index 1
     .search-item
        line-height .62rem
        padding-left .2rem
        color #666
        background #ffffff
</style>
