<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont back-btn">&#xe624;</i>
    </div>
    <div class="header-input"><i class="iconfont">&#xe632;</i>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.$store.state.city}}<i class="iconfont arrow-down-icon">&#xe64a;</i></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    font-size: 0.2rem
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-btn
        display: inline-block
        width: 100%
        height: 100%
        text-align: center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-down-icon
        font-size: .2rem
        margin-left: .1rem
</style>
