<template>
    <header>
      城市选择
      <router-link to="/">
        <div class="header-back iconfont">&#xe624;</div>
      </router-link>
    </header>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      bottom: 0
      color: #fff
      width: .64rem
      text-align: center
</style>
