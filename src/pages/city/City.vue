<template>
  <div>
    <city-header></city-header>
    <city-input :cities="cities"></city-input>
    <city-list :hot="hotCities" :cities="cities" :letter="clickedLetter"></city-list>
    <city-alphabet :cities="cities" @letterClick="handleLetterClick"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityInput from './components/Input'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  mounted () {
    this.getCityInfo()
  },
  data () {
    return {
      hotCities: [],
      cities: [],
      clickedLetter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterClick (letter) {
      this.clickedLetter = letter
    }
  },
  components: {
    CityHeader,
    CityInput,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
