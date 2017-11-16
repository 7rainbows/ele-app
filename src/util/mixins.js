/**
 * Created by 七彩城 on 2017/11/16.
 */
export const ratingsMixin = {
  data () {
    return {
      selectType:2,
      onlyContent:false
    }
  },
  computed: {
    filterRatings () {
      const ratings = this.ratings || this.food.ratings
      // const {ratings} = this || this.food   food组件无评论
      if (!ratings) {
        return []
      }
      const {selectType, onlyContent} = this

      return ratings.filter(rating =>{
        return (selectType===2 || selectType===rating.rateType) && (!onlyContent || rating.text.length>0)
      })
    },
  },
  methods: {
    toggleOnlyContent () {
      this.onlyContent = !this.onlyContent
      this.$nextTick(() =>{
        this.scroll.refresh()
      })
    },
    setSelectType (selectType) {
      this.selectType = selectType
      this.$nextTick(() =>{
        this.scroll.refresh()
      })
    }
  },
}
