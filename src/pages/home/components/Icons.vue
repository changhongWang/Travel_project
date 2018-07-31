<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="listLength">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img-box">
            <img :src="icon.imgUrl" alt="" class="icon-img">
          </div>
          <div class="icon-desc">{{icon.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    listLength () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons
    margin-top: .2rem
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    .icon
      overflow: hidden
      position: relative
      float: left
      padding-bottom: 25%
      height: 0
      width: 25%
      .icon-img-box
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
