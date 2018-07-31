<template>
  <div>
   <city-header></city-header>
    <city-input></city-input>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityInput from './components/Input'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityInput
  }
}
</script>

<style lang="stylus" scoped>

</style>
