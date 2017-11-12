/**
 * Created by 七彩城 on 2017/11/11.
 */

import {reqSeller, reqGoods, reqRatings, RESULT_OK} from '../api'
import {RECEIVE_SELLER, RECEIVE_GOODS, RECEIVE_RATINGS} from './mutation-type'

export default {
  getSeller ({commit}) {
    reqSeller().then(response => {
      const result = response.data
      if (result.code === RESULT_OK) {
        const seller = result.data
        commit(RECEIVE_SELLER, {seller})
      }
    })
  },
  getGoods ({commit}, callback) {
    reqGoods().then(response => {
      const result = response.data
      if (result.code === RESULT_OK) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
        callback && callback()
      }
    })
  },
  getRatings ({commit}) {
    reqRatings().then(response => {
      const result = response.data
      if (result.code === RESULT_OK) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, {ratings})
      }
    })
  }
}
