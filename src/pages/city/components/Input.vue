<template>
  <div>
    <div class="input-wrapper">
      <input type="text" v-model="keyword" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasList">未找到相关城市</li>
      </ul>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityInput',
  props: ['cities'],
  mounted () {
    console.log(this.$refs.search)
    this.scroll = new BScroll(this.$refs.search)
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .border-bottom
    &:before
      border-color: #ccc
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
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #f3f3f3
    .search-item
      line-height: .6rem
      padding: .2rem
      color: #666
      background: #fff
</style>
