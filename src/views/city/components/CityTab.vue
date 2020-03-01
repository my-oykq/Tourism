<template>
  <ul class="tab">
    <li class="item" v-for="item in letters" :key="item.id"
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item">{{item}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      cities:Object
    },
    data () {
      return {
        // 之后在touchstart之后才能出发touchmove的内容
        touchStatus:false,
        startY:0,
        timer:null, //做节流用
      }
    },
    computed: {
      // 一、 想拿到每一个字母的下标才能确保点击到哪个字母，因为cities是对象，不是数组无法拿到下标
      letters(){
        // 定义一个空数组
        const letters = []
        // 遍历cities拿到每一个 i
        for(let i in this.cities){
          // 拿到之后添加到letters数组中
          letters.push(i)
        }
        return letters
      }
    },
    updated () {
      // 1.A字母元素的初始位置的高度
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      // 当点击的时候就会拿到事件对象 e,点击字母切换到对应的内容
      handleClick(e){
        // e.target.innerText拿到点击的目标元素向父组件传参
        this.$emit('change',e.target.innerText)
      },
      // 当手指滑动字母表的时候左边对应的页面也跟着改变
      handleTouchStart(){
        this.touchStatus = true
      },
      // 二、手指移动 =
      handleTouchMove(e){
        // 之后当touchStatus为true才可以做move的事件处理
        if(this.touchStatus){
            // 如果timer存在的话-------节流
          if(this.timer){
            clearTimeout(this.timer)
          }//否则创建timer
              this.timer = setTimeout(() =>{
                // 2.手指移动的高度 79(header和input的和) = 内容区的移动
              const touchY = e.touches[0].clientY - 79
              // 字母的下标,那么滑动的位置就知道显示的是哪个字母了,最终位置= 元素的初始位置 - 手指的距离差
              const index = Math.floor((touchY - this.startY) / 20 )
              //如果字母的下标 >0 && <字母的长度那么就会触发
              if(index >=0 && index < this.letters.length){
                this.$emit('change',this.letters[index])
              }
          },16)

        }
      },
      handleTouchEnd(){
        this.touchStatus = false
      }
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
