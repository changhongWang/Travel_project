<template>
  <section class="weekend-wrapper">
    <h4 class="weekend-title">周末去哪儿</h4>
    <div class="weekend-detail-wrapper" v-for="item in weekendList" :key="item.id">
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
  data () {
    return {
      weekendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          title: '漂流勇进，烧烤露营',
          content: '轻松水上漂，任我乐逍遥'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          title: '来北京必去的景点非这些地方莫属',
          content: '到大自然中享受“天然空调”的清凉'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '北京必游TOP10',
          content: '来北京必去的景点非这些地方莫属'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '寻找北京的皇城范儿',
          content: '数百年的宫廷庙宇，至今依旧威严霸气'
        },
      ]
    }
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
