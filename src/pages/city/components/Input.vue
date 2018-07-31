<template>
  <div class="input-wrapper">
    <input type="text" class="" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CityInput'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .input-wrapper
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    input
      margin-top: .03rem
      box-sizing: border-box
      line-height: .62rem
      height: .62rem
      width: 100%
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>
