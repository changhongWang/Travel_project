<template>
  <section class="recommend-wrapper">
    <h4 class="recommend-title">猜您喜欢</h4>
    <div class="recommend-detail-wrapper border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
          name: '北京国际鲜花港',
          price: 19.9,
          area: '顺义区',
          remarkNumber: 1930,
          remarkScore: 4.9
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
          name: '远去的恐龙',
          price: 140,
          area: '朝阳区',
          remarkNumber: 430,
          remarkScore: 4.9
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
          name: '北京欢乐谷',
          price: 180,
          area: '朝阳区',
          remarkNumber: 44173,
          remarkScore: 4.9
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          name: '故宫',
          price: 20,
          area: '东城区',
          remarkNumber: 251766,
          remarkScore: 4.9
        }
      ]
    }
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
