/**
 * Created by 七彩城 on 2017/11/11.
 */
import axios from 'axios'
export const RESULT_OK = 0

export function reqSeller() {
  return axios.get('/api2/seller')  //返回的是promise对象
}
export function reqGoods() {
  return axios.get('/api2/goods')  //返回的是promise对象
}
export function reqRatings() {
  return axios.get('/api2/ratings')  //返回的是promise对象
}
