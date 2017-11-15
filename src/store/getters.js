/**
 * Created by 七彩城 on 2017/11/11.
 */
export default {
  foodList (state) {
    const foods = []
    state.goods.forEach(good =>{
      good.foods.forEach(food =>{
        if(food.count) {
          foods.push(food)
        }
      })
    })
    return foods
  },

  totalCount (state, getters) {
    return getters.foodList.reduce((pretotal, food) =>pretotal + food.count, 0)
  },

  totalPrice (state, getters) {
    return getters.foodList.reduce((pretotal, food) =>pretotal + food.count * food.price, 0)
  }
}
