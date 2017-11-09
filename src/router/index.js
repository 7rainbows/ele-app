/**
 * Created by 七彩城 on 2017/11/9.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../pages/goods/goods.vue'
import rating from '../pages/rating/rating.vue'
import seller from '../pages/seller/seller.vue'
//声明使用VueRouter插件
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/rating',
      component: rating
    },
    {
      path: '/seller',
      component: seller
    }
  ]
})
