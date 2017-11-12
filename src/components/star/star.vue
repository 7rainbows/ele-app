<template>
    <div class="star-wrapper">
      <span v-for="(starClass, index) in starClasses" :class="starClass" :key="index" ></span>
      <!--<span class="star48 on"></span>
      <span class="star48 on"></span>
      <span class="star48 half"></span>
      <span class="star48 off"></span>-->
    </div>
</template>

<script>
  export default {
    props:{
      score: Number,
      size: Number
    },
    computed: {
      starClasses () {
        const {score, size} =this
        const scs = []
        const scoreInteger = Math.floor(score)
        for (let i = 0; i < scoreInteger; i++) {
          scs.push(`star${size} on`)
        }
        if (score-scoreInteger>=0.5) {
          scs.push(`star${size} half`)
        }
        while (scs.length<5) {
          scs.push(`star${size} off`)
        }
        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
    .star-wrapper
      height 24px
      width 100%
      display flex
      justify-content space-around
      .star24
        width 10px
        height 10px
        background-size 10px 10px
        background-repeat no-repeat
      on
        bg-star(star24_on)
      half
        bg-star(star24_half)
      off
        bg-star(star24_off)

      .star36
        width 15px
        height 15px
        background-size 15px 15px
        background-repeat no-repeat
      on
        bg-star(star36_on)
      half
        bg-star(star36_half)
      off
        bg-star(star36_off)
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
        star-image(star48_half)
</style>
