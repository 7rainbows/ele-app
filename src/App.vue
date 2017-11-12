<template>
  <div>
    <ele-header />
    <div class="tab ">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import axios from 'axios'
  export default {

    mounted () {

      /*axios.get('/api2/seller')  //测试mock接口
        .then(response => {
          console.log(response.data);
        })*/

      this.$store.dispatch('getSeller')

    },

    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import'./common/stylus/mixins.styl'
 .tab
    display flex
    justify-content space-around
    align-items center
    height 40px
    border-1px (rgba(7,17,27,0.1))
    .tab-item
      font-size 14px
      &>a
        color rgb(77,85,93)
      .router-link-active
        color rgb(240,20,20)
</style>
