<template>
  <div>
    <router-link tag="div" to="/" class="header-back" v-show="showBackIcon">
      <i class="iconfont back-icon">&#xe624;</i>
    </router-link>
    <div class="header-main" v-show="!showBackIcon" :style="opacityStyle">
      故宫
      <router-link to="/">
        <div class="header-main-back iconfont">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showBackIcon: true,
      opacityStyle: {opacity: 0}
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top < 60) {
        this.showBackIcon = true
      } else if (top > 60 && top < 140) {
        const opacity = top / 140
        this.opacityStyle = {opacity}
        this.showBackIcon = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header-back
    text-align: center
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius .4rem
    background: rgba(0,0,0,.8)
    .back-icon
      color: #fff
      font-size: .3rem
  .header-main
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-main-back
      position: absolute
      top: 0
      bottom: 0
      color: #fff
      width: .64rem
      text-align: center
</style>
