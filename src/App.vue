<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!--不做缓存的页面放在exclude属性中-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
