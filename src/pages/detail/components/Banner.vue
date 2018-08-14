<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bImg"
           alt="故宫">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe755;</span>
          {{this.gImg.length}}
        </div>
      </div>
    </div>
    <fade>
      <common-gallary :imgs="gImg" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    gImg: Array,
    bImg: String,
    sightName: String
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      console.log(this.gImg)
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    Fade
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    /*防止页面抖动*/
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      color: #fff
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        font-size: .24rem
        background: rgba(0,0,0,.8)
        .banner-icon
          font-size: .24rem
</style>
