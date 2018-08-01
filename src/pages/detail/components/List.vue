<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="(item, index) of list" :key="index" class="list-item">
        <span class="icon"></span>
        {{item.title}}
        <span v-if="item.desc">- {{item.desc}}</span>
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
  .list-item
    padding-left: .2rem
    line-height: .8rem
    .child-list
      padding-left: .2rem
</style>
