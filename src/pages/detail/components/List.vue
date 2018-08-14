<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="(item, index) of list" :key="index" class="list-item">
        <span class="icon"></span>
        <div class="list-item-title">{{item.title}}</div>
        <span class="price" v-if="item.price">￥{{item.price}}</span>
        <detail-list v-if="item.children" :list="item.children" class="child-list"></detail-list>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .list-item
    padding-left: .2rem
    line-height: .8rem
    display: flex
    flex-direction: row
    flex-wrap: wrap
    align-items: center
    .icon
      background: deepskyblue
      display: inline-block
      width: 3px
      height: .3rem
      vertical-align middle
    .list-item-title
      flex-grow: 1
      padding-left: .1rem
    .price
      margin-right: .2rem
      color: $priceTextColor
    .child-list
      width: 100%
</style>
