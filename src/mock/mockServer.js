/**
 * Created by 七彩城 on 2017/11/11.
 */
import Mock from 'mockjs'
import data from './data.json'

//映射接口

Mock.mock('/api2/seller', {
  code: 0,
  data: data.seller
})
Mock.mock('/api2/goods', {
  code: 0,
  data: data.goods
})
Mock.mock('/api2/ratings', {
  code: 0,
  data: data.ratings
})
