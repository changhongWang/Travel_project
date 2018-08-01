<template>
    <div>
      <detail-banner :bImg="bannerImg" :name="sightName" :gImg="gallaryImgs"></detail-banner>
      <detail-header :name="sightName"></detail-header>
      <div class="content">
        <detail-list :list="categoryList"></detail-list>
      </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      categoryList: [],
      sightName: '',
      gallaryImgs: [],
      bannerImg: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSuccess).catch(this.getDetailInfoError)
    },
    getDetailInfoSuccess (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.sightName = data.sightName
        this.gallaryImgs = data.gallaryImgs
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
      }
    },
    getDetailInfoError (e) { // 异常处理
      console.log(e)
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
