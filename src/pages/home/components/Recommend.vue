<template>
  <section class="recommend-wrapper">
    <h4 class="recommend-title">猜您喜欢</h4>
    <div class="recommend-detail-wrapper border-bottom" v-for="item of list" :key="item.id">
      <img :src="item.imgUrl" alt="">
      <ul class="recommend-detail">
        <li class="detail-title">{{item.name}}</li>
        <li class="detail-remark">{{item.remarkNumber}}条评论</li>
        <li class="detail-price-area">
          <span class="price">￥<em>{{item.price}}</em></span>起
          <span class="area">{{item.area}}</span>
        </li>
      </ul>
    </div>
    <a class="href-all-product" href="http://touch.piao.qunar.com/touch/list_%E5%8C%97%E4%BA%AC_%E6%99%AF%E7%82%B9%E9%97%A8%E7%A5%A8.html?region=%E5%8C%97%E4%BA%AC&isForeign=false&pageSize=10">查看所有产品</a>
  </section>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .recommend-wrapper
    margin-top: .2rem
    .recommend-title
      width: 100%
      padding: .24rem
      background: #efefef
    .recommend-detail-wrapper
      display: flex
      img
        width: 2rem
        height: 2rem
        padding: .2rem
      .recommend-detail
        flex: 1
        padding: .3rem
        padding-left: 0
        li
          line-height: .6rem
        .detail-title
          font-size: .32rem
        .detail-remark, .detail-price-area
          font-size: .24rem
          color: $grayTextColor
        .detail-price-area
          overflow: hidden
          clear: both
          .price
            color: $priceTextColor
            em
              font-size: .4rem
          .area
            float: right
    .href-all-product
      display: block
      width: 100%
      line-height: .4rem
      padding: .2rem 0
      font-size: .28rem
      text-align: center
      color: #00afc7
</style>
