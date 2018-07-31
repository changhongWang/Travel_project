<template>
  <section class="weekend-wrapper">
    <h4 class="weekend-title">周末去哪儿</h4>
    <div class="weekend-detail-wrapper" v-for="item in list" :key="item.id">
      <img :src="item.imgUrl" alt="">
      <div class="detail-desc">
        <h5>{{item.title}}</h5>
        <p>{{item.content}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .weekend-wrapper
    .weekend-title
      width: 100%
      padding: .24rem
      background: #efefef
    .weekend-detail-wrapper
      img
        overflow: hidden
        width: 100%
        height: 37.87%
      .detail-desc
        padding: .2rem
        h5
          font-size: .28rem
          line-height .48rem
          color: $darkTextColor
        p
          font-size: .24rem
          line-height: .42rem
          color: $grayTextColor
</style>
