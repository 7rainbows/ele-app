<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟到达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="supportsClass[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="toggleShow">
        <span class="count">{{seller.supports.length}}</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="toggleShow">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="bg">
      <img :src="seller.avatar" alt="">
    </div>
    <transition name="fade">
      <div class="detail" v-show="isShow">
        <div class="detail-wrapper">
          <div class="detail-main">
            <div class="name">{{seller.name}}</div>
            <star :score="seller.score" :size="48"/> <!--star组件-->
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports" v-if="seller.supports">
              <li class="support" v-for="(support, index) in seller.supports" :key="index">
                <span class="icon" :class="supportsClass[support.type]"></span>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="content">
              <p>{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="toggleShow">
          <span class="icon-close"></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import star from '../star/star.vue'
  export default {
    data () {
      return {
        supportsClass: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
        isShow: false
      }
    },
    computed: mapState(['seller']),
    components:{star},
    methods: {
      toggleShow () {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .header
    color #fff
    position relative
    background-color rgba(7,17,27,0.5)
    overflow hidden
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      display flex
      .avatar
        height 64px
        width 64px
        &>img
          width 100%
          height 100%
          border-radius 2px
      .content
        margin-left 16px
        padding 2px 0
        padding-bottom 2px
        .title
          display flex
          .brand
            width 30px
            height 18px
            background-size 30px 18px
            background-repeat no-repeat
            bg-image(brand)
          .name
            font-size 16px
            color rgb(255,255,255)
            font-weight bold
            line-height 18px
            margin-left 6px
        .description
          font-size 12px
          line-height 12px
          color rgb(255,255,255)
          font-weight 200
          margin-top 8px
          margin-bottom 10px
        .support
          display flex
          .icon
            width 12px
            height 12px
            background-repeat no-repeat
            background-size 12px 12px
            bg-image(invoice_1)
          .text
            font-size 10px
            font-weight 200
            line-height 12px
            margin-left 4px
      .supports-count
        position absolute
        bottom 18px
        right 12px
        height 24px
        background-color rgba(0,0,0,0.2)
        padding 7px 8px
        border-radius 8px
        line-height 10px
        font-size 10px
        font-weight 200
        box-sizing border-box
    .bg
      position absolute  /*?????*/
      left 0
      top 0
      z-index -1
      width 100%
      height 100%
      &>img
        filter blur(10px) /*模糊度*/
        width 100%
        height 100%
    .bulletin-wrapper
      position relative
      height 28px
      background-color rgba(7,17,27,0.2)
      padding 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      line-height 28px
      .bulletin-title
        display inline-block
        vertical-align middle
        width 22px
        height 12px
        background-size 22px 12px
        background-repeat no-repeat
        bg-image(bulletin)
      .bulletin-text
        margin 0 4px
        font-size 10px
        font-weight 200
      &>.icon-keyboard_arrow_right
        position absolute
        top 6px
        right 7px
    .detail
      /*      */
      width 100%
      height 100%
      position fixed
      left 0
      top 0
      background-color rgba(7,17,27,0.8)
      z-index 60
      &.fade-enter-active, &.fade-leave-active
        transition opacity .3s
      &.fade-enter, &.fade-leave-to
        opacity 0
      .detail-wrapper
        min-height 100%
        padding 64px 36px 32px
        .detail-main
          position relative
          .name
            text-align center
            font-size 16px
            font-weight 700
            line-height 16px
            margin-bottom 16px
          /*.star-wrapper
            height 24px
            width 100%
            display flex
            justify-content space-around
            .star48
              width 20px
              height 20px
              background-size 20px 20px
              background-repeat no-repeat
            .on
              star-image(star48_on)
            .off
              star-image(star48_off)
            .half
              star-image(star48_half)*/
          .title
            display flex
            justify-content space-between
            align-items center
            margin-bottom 24px
            margin-top 28px
            .line
              width 112px
              height 3px
              background-color rgba(255,255,255,0.2)
            .text
              font-size 14px
              font-weight 700
              line-height 14px
          .supports
            padding 0 12px
            .support
              height 16px
              margin-bottom 12px
              display flex
              align-items center
              .icon
                width 16px
                height 16px
                background-repeat no-repeat
                background-size 16px 16px
              .decrease
                bg-image(decrease_2)
              .discount
                bg-image(discount_2)
              .guarantee
                bg-image(guarantee_2)
              .invoice
                bg-image(invoice_2)
              .special
                bg-image(special_2)
              .text
                font-size 12px
                font-weight 200
                line-height 12px
                margin-left 6px
          .content
            font-size 12px
            font-weight 200
            line-height 24px
            padding 0 12px
      .detail-close
        margin-top -160px
        font-size 32px
        color rgba(255,255,255,0.5)
        text-align center

</style>
